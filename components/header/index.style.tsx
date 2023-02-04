import { IMode, MODE } from '@/constant/display-mode';
import styled from '@emotion/styled';

export const Container = styled.div<{ mode: IMode }>`
  .header {
    position: fixed;
    top: 0;

    height: 9.4rem;
    width: 100%;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 2.8rem;

    z-index: 10;

    .title {
      font-size: 1.6rem;
      font-weight: 200;

      color: ${({ theme, mode }) => (mode === MODE.DARK ? theme.gray1 : theme.gray9)};
    }
  }
`;

export const Hamburger = styled.div<{ isToggle: boolean; mode: IMode }>`
  cursor: pointer;

  div[class^='hamburger-bar'] {
    width: 3rem;
    height: 0.3rem;

    border-radius: 0.3rem;
    background-color: ${({ theme, mode }) => (mode === MODE.DARK ? theme.gray1 : theme.gray9)};

    transition: 0.3s;

    & + div[class^='hamburger-bar'] {
      margin-top: 0.6rem;
    }
  }

  .hamburger-bar-1 {
    transform: ${({ isToggle }) => isToggle && 'rotate(-45deg) translate(-0.8rem, 0.6rem)'};
  }

  .hamburger-bar-2 {
    opacity: ${({ isToggle }) => (isToggle ? 0 : 1)};
  }

  .hamburger-bar-3 {
    transform: ${({ isToggle }) => isToggle && 'rotate(45deg) translate(-0.8rem, -0.5rem)'};
  }
`;

export const SideMenu = styled.div<{ mode: IMode; isFadeout: boolean }>`
  position: fixed;
  top: 0;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 5;

  background: ${({ mode }) => `url('/image/background-${mode === MODE.DARK ? 'dark' : 'light'}.png')`};

  animation: ${({ isFadeout }) => (isFadeout ? 'menu-opening 0.5s, menu-closing 0.5s' : 'menu-opening 0.5s')};

  h1 + h1 {
    margin-top: 4rem;
  }

  @media (max-width: 480px) {
    h1 + h1 {
      margin-top: 3.6rem;
    }
  }

  @keyframes menu-opening {
    0% {
      opacity: 0;
      pointer-events: none;
    }
    100% {
      opacity: 1;
      pointer-events: auto;
    }
  }

  @keyframes menu-closing {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      pointer-events: none;
    }
  }
`;

export const Menu = styled.h1<{ isSelected: boolean; mode: IMode }>`
  font-size: 6.4rem;
  font-weight: 800;

  color: ${({ theme, isSelected, mode }) =>
    isSelected ? theme.primary : mode === MODE.DARK ? theme.gray1 : theme.gray8};

  cursor: pointer;

  border-bottom: 0.2rem solid ${({ isSelected, theme }) => (isSelected ? theme.primary : 'transparent')};

  @media (max-width: 480px) {
    font-size: 4.6rem;
  }
`;
