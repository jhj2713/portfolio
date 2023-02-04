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

  .menu {
    position: fixed;
    top: 0;

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 5;

    background: url('/image/background-dark.png');

    h1 + h1 {
      margin-top: 4rem;
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

export const Menu = styled.h1<{ isSelected: boolean }>`
  font-size: 6.4rem;
  font-weight: 800;

  color: ${({ theme, isSelected }) => (isSelected ? theme.primary : theme.gray1)};

  cursor: pointer;

  border-bottom: 0.2rem solid ${({ isSelected, theme }) => (isSelected ? theme.primary : 'transparent')};
`;
