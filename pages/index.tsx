import Contact from '@/components/contact';
import Experiences from '@/components/experiences';
import Header from '@/components/header';
import Introduce from '@/components/introduce';
import Main from '@/components/main';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import { MODE } from '@/constant/display-mode';
import { SIDE_MENU, ISideMenu, MENU_MAP, IMenuMap } from '@/constant/sidebar-menu';
import { ISwipeMode, SWIPE_MODE } from '@/constant/swipe-mode';
import color from '@/styles/color.style';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Container, MousePointer } from '@/styles/index.style';

export default function Home({ id }: { id: IMenuMap }) {
  const [mousePosition, setMousePosition] = useState({ left: -100, top: -100 });
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [pageIndex, setPageIndex] = useState<ISideMenu>(id ? MENU_MAP[id] : SIDE_MENU.MAIN);
  const [pointerColor, setPointerColor] = useState<string>(color.primary);
  const [isUnmount, setIsUnmount] = useState<ISwipeMode>(SWIPE_MODE.NOT_MOUNTED);

  const throttle = useRef<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!window.visualViewport) return;
      window.scrollTo(0, window.visualViewport.height);
      window.addEventListener('scroll', handleScrollRouting);
      clearTimeout(timer);
    }, 1000);

    if (pageIndex !== SIDE_MENU.PROJECTS && pageIndex !== SIDE_MENU.EXPERIENCES) setPointerColor(color.primary);

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
    if (!window.visualViewport) return;

    if (window.scrollY > (window.visualViewport.height * 3) / 2) {
      if (pageIndex === 5) {
        window.scrollTo(0, window.visualViewport.height);
        return;
      } else {
        setIsUnmount(SWIPE_MODE.DOWN);
        let delay = 1000;
        if (pageIndex === SIDE_MENU.SKILLS || pageIndex === SIDE_MENU.EXPERIENCES) {
          delay = 1500;
        }

        const timer = setTimeout(() => {
          setIsUnmount(SWIPE_MODE.NOT_MOUNTED);
          router.push(`/?id=${Object.keys(MENU_MAP)[pageIndex + 1]}`);
          setPageIndex((pageIndex + 1) as ISideMenu);
          clearTimeout(timer);
        }, delay);
      }
    } else if (window.scrollY < (window.visualViewport.height * 2) / 3) {
      if (pageIndex === 0) {
        window.scrollTo(0, window.visualViewport.height);
        return;
      } else if (pageIndex === 1) {
        setIsUnmount(SWIPE_MODE.UP);

        const timer = setTimeout(() => {
          setIsUnmount(SWIPE_MODE.NOT_MOUNTED);
          router.push(`/`);
          setPageIndex((pageIndex - 1) as ISideMenu);
          clearTimeout(timer);
        }, 1000);
      } else {
        setIsUnmount(SWIPE_MODE.UP);
        let delay = 1000;
        if (pageIndex === SIDE_MENU.CONTACT || pageIndex === SIDE_MENU.PROJECTS) {
          delay = 1500;
        }

        const timer = setTimeout(() => {
          setIsUnmount(SWIPE_MODE.NOT_MOUNTED);
          router.push(`/?id=${Object.keys(MENU_MAP)[pageIndex - 1]}`);
          setPageIndex((pageIndex - 1) as ISideMenu);
          clearTimeout(timer);
        }, delay);
      }
    }
  };

  const pageRenderer = () => {
    if (pageIndex === SIDE_MENU.MAIN) return <Main isUnmount={isUnmount} />;
    else if (pageIndex === SIDE_MENU.INTRODUCE) return <Introduce isUnmount={isUnmount} />;
    else if (pageIndex === SIDE_MENU.SKILLS) return <Skills isUnmount={isUnmount} />;
    else if (pageIndex === SIDE_MENU.PROJECTS)
      return <Projects setPointerColor={setPointerColor} isUnmount={isUnmount} />;
    else if (pageIndex === SIDE_MENU.EXPERIENCES)
      return <Experiences setPointerColor={setPointerColor} isUnmount={isUnmount} />;
    else return <Contact isUnmount={isUnmount} />;
  };

  const handleMode = () => {
    if (pageIndex === SIDE_MENU.PROJECTS || pageIndex === SIDE_MENU.EXPERIENCES) return MODE.LIGHT;
    return MODE.DARK;
  };

  return (
    <>
      <Header
        isToggle={isToggle}
        setIsToggle={setIsToggle}
        mode={handleMode()}
        selectedMenu={pageIndex}
        setPageIndex={setPageIndex}
        setIsUnmount={setIsUnmount}
      />
      <Container mode={handleMode()} isUnmount={isUnmount}>
        {pageRenderer()}
        {isUnmount !== SWIPE_MODE.NOT_MOUNTED ? <div className="transition-background" /> : null}
        <MousePointer left={mousePosition.left} top={mousePosition.top} pointerColor={pointerColor} />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;

  if (query.id) {
    if (MENU_MAP[String(query.id)]) {
      return {
        props: {
          id: query.id,
        },
      };
    } else {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
        props: {},
      };
    }
  } else
    return {
      props: {},
    };
};
