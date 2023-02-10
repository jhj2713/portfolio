import styled from '@emotion/styled';

export const Container = styled.div<{ left: number; top: number; pointerColor: string }>`
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
