import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 300vh;
`;

export const MousePointer = styled.div<{ left: number; top: number }>`
  position: fixed;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;

  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.primary};

  @media (max-width: 820px) {
    display: none;
  }
`;
