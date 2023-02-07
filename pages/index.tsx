import Header from '@/components/header';
import Introduce from '@/components/introduce';
import Main from '@/components/main';
import { MODE } from '@/constant/display-mode';
import { SIDE_MENU, ISideMenu, MENU_MAP, IMenuMap } from '@/constant/sidebar-menu';
import { GetServerSideProps } from 'next';
import { useEffect, useRef, useState } from 'react';
import { Container, MousePointer } from './index.style';

export default function Home({ id }: { id: IMenuMap }) {
  const [mousePosition, setMousePosition] = useState({ left: -100, top: -100 });
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [pageIndex, setPageIndex] = useState<ISideMenu>(id ? MENU_MAP[id] : SIDE_MENU.MAIN);

  const throttle = useRef<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, window.visualViewport.height);
      window.addEventListener('scroll', handleScrollRouting);
      clearTimeout(timer);
    }, 1000);

    return () => window.removeEventListener('scroll', handleScrollRouting);
  }, [pageIndex]);
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: MouseEvent) => {
    if (throttle.current) return;
    else {
      throttle.current = true;
      const timer = setTimeout(() => {
        setMousePosition({ left: e.clientX, top: e.clientY });
        throttle.current = false;
        clearTimeout(timer);
      }, 20);
    }
  };

  const handleScrollRouting = () => {
    if (window.scrollY > (window.visualViewport.height * 3) / 2) {
      if (pageIndex === 5) window.scrollTo(0, window.visualViewport.height);
      else setPageIndex((pageIndex + 1) as ISideMenu);
    } else if (window.scrollY < (window.visualViewport.height * 2) / 3) {
      if (pageIndex === 0) window.scrollTo(0, window.visualViewport.height);
      else setPageIndex((pageIndex - 1) as ISideMenu);
    }
  };

  const pageRenderer = () => {
    if (pageIndex === SIDE_MENU.MAIN) return <Main />;
    else return <Introduce />;
  };

  return (
    <>
      <Header isToggle={isToggle} setIsToggle={setIsToggle} mode={MODE.DARK} selectedMenu={pageIndex} />
      <Container>
        {pageRenderer()}
        <MousePointer left={mousePosition.left} top={mousePosition.top} />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;

  if (query.id)
    return {
      props: {
        id: query.id,
      },
    };
  else
    return {
      props: {},
    };
};
