import { useEffect, useRef, useState } from 'react';
import { MainContainer, MousePointer, ScrollBox, Title } from './index.style';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ left: -100, top: -100 });
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
    <MainContainer>
      <MousePointer left={mousePosition.left} top={mousePosition.top} />
      <div className="line top" />
      <Title>
        <h1 className="name">Hyojeong</h1>
        <h1 className="portfolio">Portfolio</h1>
      </Title>
      <div className="line bottom" />
      <ScrollBox>
        <div className="icon" />
        <p className="text">scroll down</p>
      </ScrollBox>
    </MainContainer>
  );
}
