import color from '@/styles/color.style';
import { Dispatch, useEffect, useRef } from 'react';

export default function useSwiper(itemCount: number, colors: string[], setPointerColor: Dispatch<string>) {
  const swiperContainerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);

  const start = useRef<number>(0);
  const current = useRef<number>(0);

  useEffect(() => {
    if (!swiperRef.current) return;

    swiperRef.current.addEventListener('touchstart', handleTouchStart);
    swiperRef.current.addEventListener('touchend', handleTouchEnd);

    swiperRef.current.addEventListener('mousedown', handleMouseStart);
    swiperRef.current.addEventListener('mouseup', handleMouseEnd);

    return () => {
      swiperRef.current?.removeEventListener('touchstart', handleTouchStart);
      swiperRef.current?.removeEventListener('touchend', handleTouchEnd);

      swiperRef.current?.removeEventListener('mousedown', handleMouseStart);
      swiperRef.current?.removeEventListener('mouseup', handleMouseEnd);
    };
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    start.current = e.touches[0].pageX;
  };

  const handleMouseStart = (e: MouseEvent) => {
    start.current = e.pageX;
  };

  const handleEnd = (endX: number) => {
    if (!swiperContainerRef.current || !swiperRef.current) return;

    const width = swiperContainerRef.current.clientWidth;

    let destination = current.current;
    if (endX - start.current < -(width / 3) / 3) {
      destination -= width / 3;
    } else if (endX - start.current > width / 3 / 3) {
      destination += width / 3;
    }

    if (
      destination > 0 ||
      (itemCount === 3 && destination <= -width) ||
      (itemCount === 2 && destination <= (-width * 2) / 3)
    )
      return;

    setPointerColor(handlePointerColor(destination, width));

    swiperRef.current.style.transform = `translate3d(${destination}px, 0px, 0px)`;
    swiperRef.current.style.transitionDuration = '300ms';
    current.current = destination;
  };

  const handlePointerColor = (dest: number, width: number) => {
    if (colors.length < 2) return color.primary;

    if (dest === 0) {
      return colors[0];
    } else if (dest === -width / 3) {
      return colors[1];
    }

    return colors.length === 3 ? colors[2] : colors[0];
  };

  const handleTouchEnd = (e: TouchEvent) => {
    handleEnd(e.changedTouches[0].pageX);
  };

  const handleMouseEnd = (e: MouseEvent) => {
    handleEnd(e.pageX);
  };

  const swipeLeft = () => {
    if (!swiperContainerRef.current) return;
    start.current = 0;
    handleEnd(swiperContainerRef.current.clientWidth);
  };

  const swipeRight = () => {
    if (!swiperContainerRef.current) return;
    start.current = swiperContainerRef.current.clientWidth / 3;
    handleEnd(0);
  };

  return { swiperContainerRef, swiperRef, swipeLeft, swipeRight };
}
