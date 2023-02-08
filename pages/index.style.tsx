import { IMode, MODE } from '@/constant/display-mode';
import styled from '@emotion/styled';

export const Container = styled.div<{ mode: IMode }>`
  width: 100%;
  height: 300vh;

  background: ${({ mode }) =>
    mode === MODE.DARK ? "url('/image/background-dark.png')" : "url('/image/background-light.png')"};
  background-size: cover;
  background-attachment: fixed;
`;

export const MousePointer = styled.div<{ left: number; top: number; pointerColor: string }>`
  position: fixed;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;

  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;

  background-color: ${({ pointerColor }) => pointerColor};

  @media (max-width: 820px) {
    display: none;
  }
`;
