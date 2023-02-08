import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;

  opacity: 0;
  animation: swiper-opening 0.01s 1s forwards;

  .swiper {
    width: 300vw;
    display: flex;
    overflow-x: hidden;

    animation: swiper-item-opening 0.5s 1s;
  }

  .swiper-button {
    opacity: 0.6;
    transition: 0.3s;

    position: absolute;

    cursor: pointer;

    animation: swiper-button-opening 0.5s 1s;

    :hover {
      opacity: 1;
    }
  }

  .swiper-left {
    left: 2rem;
    transform: scaleX(-1);
  }

  .swiper-right {
    right: 2rem;
  }

  @keyframes swiper-opening {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes swiper-button-opening {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.6;
    }
  }

  @keyframes swiper-item-opening {
    0% {
      transform: translateX(100vw);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const SwiperImage = styled.img`
  width: 3rem;
  height: 5.6rem;

  @media (max-width: 480px) {
    width: 2rem;
    height: 4rem;
  }
`;
