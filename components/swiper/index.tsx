import useSwiper from '@/hooks/useSwiper';
import { Container, SwiperImage } from './index.style';
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
        <SwiperImage alt="swipe left" src="/image/swiper.svg" />
      </div>
      <div className="swiper-button swiper-right" onClick={swipeRight}>
        <SwiperImage alt="swipe right" src="/image/swiper.svg" />
      </div>
    </Container>
  );
}
