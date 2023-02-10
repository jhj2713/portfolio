import { IMode, MODE } from '@/constant/display-mode';
import { ISwipeMode, SWIPE_MODE } from '@/constant/swipe-mode';
import styled from '@emotion/styled';

export const Container = styled.div<{ mode: IMode; isUnmount: ISwipeMode }>`
  width: 100%;
  height: 300vh;

  background: ${({ mode }) =>
    mode === MODE.DARK
      ? "url('/image/background/background-dark.png'), url('/image/background/background-light.png')"
      : "url('/image/background/background-light.png')"};
  background-size: cover;
  background-attachment: fixed;

  .transition-background {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background: ${({ mode }) =>
      mode === MODE.DARK
        ? "url('/image/background/background-light.png')"
        : "url('/image/background/background-dark.png')"};
    background-size: cover;
    background-attachment: fixed;

    z-index: 3;

    opacity: 0;
    animation: ${({ isUnmount }) =>
      isUnmount === SWIPE_MODE.UP ? 'background-up 0.5s 1s' : 'background-down 0.5s 1s'};

    @keyframes background-up {
      0% {
        opacity: 0;
        top: -100vh;
      }
      100% {
        opacity: 1;
        top: 0;
      }
    }
    @keyframes background-down {
      0% {
        opacity: 0;
        top: 100vh;
      }
      100% {
        opacity: 1;
        top: 0;
      }
    }
  }
`;
