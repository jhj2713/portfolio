import useSwiper from '@/hooks/useSwiper';
import Image from 'next/image';
import { Container } from './index.style';
import { ISwiper } from './index.type';

export default function Swiper({ children, itemCount, colors, setPointerColor }: ISwiper) {
  const { swiperContainerRef, swiperRef, swipeLeft, swipeRight } = useSwiper(itemCount, colors, setPointerColor);

  return (
    <Container>
      <div ref={swiperContainerRef}>
        <div ref={swiperRef} className="swiper">
          {children}
        </div>
      </div>
      <div className="swiper-button swiper-left" onClick={swipeLeft}>
        <Image alt="swipe left" src="/image/swiper.svg" width={30} height={56} />
      </div>
      <div className="swiper-button swiper-right" onClick={swipeRight}>
        <Image alt="swipe right" src="/image/swiper.svg" width={30} height={56} />
      </div>
    </Container>
  );
}
