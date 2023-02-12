import { ISwipeMode, SWIPE_MODE } from '@/constant/swipe-mode';
import styled from '@emotion/styled';

export const Container = styled.div<{ isUnmount: ISwipeMode }>`
  position: fixed;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;

  box-sizing: border-box;

  animation: ${({ isUnmount }) =>
    isUnmount === SWIPE_MODE.UP
      ? 'up-closing 1s forwards'
      : isUnmount === SWIPE_MODE.DOWN
      ? 'down-closing 1s forwards'
      : ''};

  .swiper-item {
    width: 100vw;
    display: flex;
  }
`;

export const ModalContents = styled.div<{ color: string }>`
  color: ${({ theme }) => theme.gray1};

  .modal-title {
    font-size: 3.6rem;
    font-weight: 600;
  }

  .modal-description {
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 150%;

    margin-top: 1.2rem;
  }

  .modal-tags {
    margin-top: 2rem;

    div {
      margin-right: 0.4rem;
      margin-bottom: 0.6rem;
    }
  }

  .modal-subtitle {
    font-size: 2.4rem;
    font-weight: 400;

    margin-top: 2.8rem;
  }

  .modal-contents {
    margin-top: 1.6rem;

    word-break: break-all;
  }

  .modal-text {
    display: flex;
    align-items: flex-start;

    font-size: 1.8rem;
    font-weight: 300;
    line-height: 150%;

    margin-top: 1rem;
  }

  .tab {
    margin-left: 2.4rem;
  }

  .list-style {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1.2rem;

    .circle {
      width: 0.6rem;
      height: 0.6rem;

      background-color: ${({ color }) => color};

      border-radius: 50%;
    }
  }

  .modal-bottom {
    margin: 4rem 0;

    display: flex;
    justify-content: center;
  }

  .link {
    margin-right: 2.4rem;

    cursor: pointer;
  }

  .github {
    cursor: pointer;
  }

  @media (max-width: 820px) {
    .modal-tags {
      margin-top: 1.6rem;
    }

    .modal-text {
      margin-top: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .modal-title {
      font-size: 3.2rem;
    }

    .modal-description {
      font-size: 1.6rem;
    }

    .modal-tags {
      display: none;
    }

    .modal-subtitle {
      font-size: 2.2rem;

      margin-top: 2.4rem;
    }

    .modal-contents {
      margin-top: 1.6rem;
    }

    .modal-text {
      font-size: 1.6rem;
    }

    .modal-bottom {
      margin: 2rem 0;
    }
  }
`;
