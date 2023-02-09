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
    isUnmount === SWIPE_MODE.UP ? 'up-closing 1s' : isUnmount === SWIPE_MODE.DOWN ? 'down-closing 1s' : ''};

  .swiper-item {
    width: 100vw;
  }
`;

export const Experience = styled.div<{ color: string }>`
  display: flex;
  margin: 10rem;

  .left {
    position: relative;

    .mac-pointer {
      position: absolute;

      left: -1rem;
      top: 1rem;

      animation: mac-pointer-animation 2s infinite;
    }

    @keyframes mac-pointer-animation {
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(0.8);
      }
      50% {
        transform: scale(1);
      }
    }
  }

  .right {
    margin-left: 8rem;
  }

  .title {
    font-size: 3.6rem;
    font-weight: 600;

    color: ${({ theme }) => theme.gray8};

    h1 {
      display: inline-block;

      :hover {
        animation: hover-animation 0.5s ease-in-out;
      }

      @keyframes hover-animation {
        0% {
          color: ${({ theme }) => theme.gray8};
        }
        50% {
          color: ${({ color }) => color};
          transform: translateY(-1rem);
        }
        100% {
          color: ${({ theme }) => theme.gray8};
        }
      }
    }
  }

  .contents {
    margin-top: 1.6rem;

    font-size: 2rem;
    font-weight: 300;
    line-height: 150%;

    color: ${({ theme }) => theme.gray8};
  }

  .highlight {
    color: ${({ color }) => color};
  }

  .tags {
    margin-top: 2.4rem;
  }

  .tag {
    display: inline-block;
    margin: 0 0.8rem 1.2rem 0;
  }

  @media (max-width: 820px) {
    flex-direction: column;
    justify-content: center;

    .left {
      align-self: center;
    }

    .right {
      margin-left: 0rem;
      margin-top: 4rem;
    }
  }

  @media (max-width: 480px) {
    margin: 6rem;

    .title {
      font-size: 3.2rem;
    }

    .contents {
      font-size: 1.6rem;
    }
  }
`;

export const Mockup = styled.img`
  width: 100%;
  max-width: 32rem;
  min-width: 24rem;

  max-height: 26.6rem;
  min-height: 20rem;
`;

export const ProjectImage = styled.img`
  position: absolute;
  left: 0.8rem;
  top: 0.8rem;

  width: calc(100% - 1.6rem);
  max-width: 30rem;
  min-width: 22.5rem;

  cursor: pointer;
`;

export const ModalContents = styled.div<{ color: string }>`
  color: ${({ theme }) => theme.gray1};
  margin-bottom: 2rem;

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

    font-size: 1.8rem;
    font-weight: 300;
    line-height: 150%;

    margin-top: 1rem;
  }

  .link {
    color: ${({ theme }) => theme.primary};

    margin-left: 1.2rem;
  }

  .date {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.gray3};

    margin-left: 1.2rem;
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
    .date {
      font-size: 1.4rem;
    }

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