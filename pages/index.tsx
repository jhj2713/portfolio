import Header from '@/components/header';
import { MODE } from '@/constant/display-mode';
import { SIDE_MENU } from '@/constant/sidebar-menu';
import { useEffect, useRef, useState } from 'react';
import { MainContainer, MousePointer, ScrollBox, Title } from './index.style';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ left: -100, top: -100 });
  const [isToggle, setIsToggle] = useState<boolean>(false);

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
      <MainContainer>
        <MousePointer left={mousePosition.left} top={mousePosition.top} />
        <div className="line top" />
        <Title>
          <div className="name">
            <h1>H</h1>
            <h1>y</h1>
            <h1>o</h1>
            <h1>j</h1>
            <h1>e</h1>
            <h1>o</h1>
            <h1>n</h1>
            <h1>g</h1>
          </div>
          <div className="portfolio">
            <h1>P</h1>
            <h1>o</h1>
            <h1>r</h1>
            <h1>t</h1>
            <h1>f</h1>
            <h1>o</h1>
            <h1>l</h1>
            <h1>i</h1>
            <h1>o</h1>
          </div>
        </Title>
        <div className="line bottom" />
        <ScrollBox>
          <div className="icon" />
          <p className="text">scroll down</p>
        </ScrollBox>
      </MainContainer>
    </>
  );
}
