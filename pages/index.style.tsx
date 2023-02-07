import styled from '@emotion/styled';

export const MousePointer = styled.div<{ left: number; top: number }>`
  position: absolute;
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
