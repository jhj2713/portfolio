import Header from '@/components/header';
import Main from '@/components/main';
import { MODE } from '@/constant/display-mode';
import { SIDE_MENU, ISideMenu, MENU_MAP, IMenuMap } from '@/constant/sidebar-menu';
import { GetServerSideProps } from 'next';
import { useEffect, useRef, useState } from 'react';
import { MousePointer } from './index.style';

export default function Home({ id }: { id: IMenuMap }) {
  const [mousePosition, setMousePosition] = useState({ left: -100, top: -100 });
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [pageIndex, setPageIndex] = useState<ISideMenu>(id ? MENU_MAP[id] : SIDE_MENU.MAIN);

  const throttle = useRef<boolean>(false);

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

  return (
    <>
      <Header isToggle={isToggle} setIsToggle={setIsToggle} mode={MODE.DARK} selectedMenu={SIDE_MENU.MAIN} />
      <Main />
      <MousePointer left={mousePosition.left} top={mousePosition.top} />
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
