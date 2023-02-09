import { ISwipeMode, SWIPE_MODE } from '@/constant/swipe-mode';
import styled from '@emotion/styled';

export const Container = styled.div<{ isUnmount: ISwipeMode }>`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  animation: ${({ isUnmount }) =>
    isUnmount === SWIPE_MODE.UP
      ? 'up-closing 1s forwards'
      : isUnmount === SWIPE_MODE.DOWN
      ? 'down-closing 1s forwards'
      : ''};

  .line {
    width: 50rem;
    height: 0.2rem;

    background-color: ${({ theme }) => theme.gray1};
    border-radius: 1rem;
  }

  .top {
    animation: line-opening 1.5s ease-in-out, transform-top 1.5s 1.5s ease-in-out forwards;

    @keyframes transform-top {
      0% {
        transform: translateY(-4rem);
      }
      100% {
        transform: translateY(-16rem);
      }
    }
  }

  .bottom {
    animation: line-opening 1.5s ease-in-out, transform-bottom 1.5s 1.5s ease-in-out forwards;

    @keyframes transform-bottom {
      0% {
        transform: translateY(-4rem);
      }
      100% {
        transform: translateY(8rem);
      }
    }
  }

  @media (max-width: 480px) {
    .line {
      width: 30rem;
    }

    .top {
      animation: line-opening-mobile 1.5s ease-in-out, transform-top 1.5s 1.5s ease-in-out forwards;
    }

    .bottom {
      animation: line-opening-mobile 1.5s ease-in-out, transform-bottom 1.5s 1.5s ease-in-out forwards;
    }
  }

  @keyframes line-opening {
    0% {
      width: 0;
      transform: translateY(-4rem);
    }
    100% {
      width: 50rem;
      transform: translateY(-4rem);
    }
  }

  @keyframes line-opening-mobile {
    0% {
      width: 0;
      transform: translateY(-4rem);
    }
    100% {
      width: 30rem;
      transform: translateY(-4rem);
    }
  }
`;

export const Title = styled.div`
  position: absolute;

  div {
    font-size: 6.4rem;
    font-weight: 900;
    letter-spacing: 0.6rem;

    color: ${({ theme }) => theme.gray1};

    h1 {
      display: inline-block;
    }
  }

  h1:hover {
    animation: hover-animation 1s ease-in-out;

    @keyframes hover-animation {
      0% {
        color: ${({ theme }) => theme.gray1};
      }
      50% {
        color: ${({ theme }) => theme.primary};
        transform: translateY(-1rem);
      }
      100% {
        color: ${({ theme }) => theme.gray1};
      }
    }
  }

  .name {
    opacity: 0;
    animation: transform-title 1.5s 1.5s ease-in-out forwards;

    text-align: center;

    @keyframes transform-title {
      0% {
        opacity: 1;
        clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
        transform: translateY(2rem);
      }
      100% {
        opacity: 1;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        transform: translateY(-4rem);
      }
    }
  }

  .portfolio {
    margin-top: 0.4rem;

    opacity: 0;
    animation: transform-portfolio 1.5s 1.5s ease-in-out forwards;

    text-align: center;

    @keyframes transform-portfolio {
      0% {
        opacity: 1;
        clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
        transform: translateY(-10rem);
      }
      100% {
        opacity: 1;
        clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%);
        transform: translateY(-4rem);
      }
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 4.8rem;
      letter-spacing: 0.4rem;
    }
  }
`;

export const ScrollBox = styled.div`
  position: absolute;
  bottom: 3.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  opacity: 0;

  animation: scroll-opening 1s forwards;
  animation-delay: 3.5s;

  @keyframes scroll-opening {
    100% {
      opacity: 1;
    }
  }

  .icon {
    width: 4rem;
    height: 6.4rem;
    position: relative;

    border-radius: 3rem;

    background: ${({ theme }) =>
      `linear-gradient(transparent 0%, transparent 50%, ${theme.gray1} 50%, ${theme.gray1} 100%)`};
    background-size: 100% 200%;

    animation: iconColorTransform 3s linear infinite, iconPositionTransform 3s ease-out infinite;

    ::before,
    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }

    ::before {
      width: 3.6rem;
      height: 6rem;
      border-radius: 3rem;

      background: #282826;
    }
    ::after {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;

      background-color: ${({ theme }) => theme.gray1};

      animation: ballPositionTransform 3s linear infinite;
    }
  }

  .text {
    margin-top: 1.2rem;

    font-weight: 300;
    font-size: 1.6rem;
    letter-spacing: 0.2rem;

    color: ${({ theme }) => theme.gray1};

    animation: textColorTransform 3s ease-out infinite, textPositionTransform 3s ease-out infinite;
  }

  @keyframes iconColorTransform {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 0% 0%;
      background-color: ${({ theme }) => theme.gray5};
    }
    100% {
      background-color: ${({ theme }) => theme.gray1};
    }
  }

  @keyframes iconPositionTransform {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0.8rem);
    }
    90% {
      transform: translateY(0);
    }
  }

  @keyframes ballPositionTransform {
    0% {
      opacity: 1;
      transform: translateY(-0.8rem);
    }
    50% {
      opacity: 0;
      transform: translateY(1.6rem);
    }
    60% {
      opacity: 0;
      transform: translateY(-0.8rem);
    }
    100% {
      opacity: 1;
      transform: translateY(-0.8rem);
    }
  }

  @keyframes textColorTransform {
    51% {
      color: ${({ theme }) => theme.gray5};
    }
    90% {
      color: ${({ theme }) => theme.gray1};
    }
  }

  @keyframes textPositionTransform {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0.4rem);
    }
    90% {
      transform: translateY(0);
    }
  }
`;
