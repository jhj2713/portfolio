import { useEffect, useRef, useState } from 'react';
import { Container } from './index.style';

function MousePointer({ pointerColor }: { pointerColor: string }) {
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

  return <Container left={mousePosition.left} top={mousePosition.top} pointerColor={pointerColor} />;
}

export default MousePointer;
