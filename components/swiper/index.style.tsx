import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;

  .swiper {
    width: 300vw;
    display: flex;
    overflow-x: hidden;
  }

  .swiper-button {
    opacity: 0.6;
    transition: 0.3s;

    position: absolute;

    cursor: pointer;

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
`;
