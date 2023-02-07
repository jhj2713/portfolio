import styled from '@emotion/styled';

export const Container = styled.div<{ borderColor: string; backgroundColor: string; textColor: string }>`
  display: inline-block;

  border: 0.1rem solid ${({ borderColor }) => borderColor};
  border-radius: 3rem;

  background-color: ${({ backgroundColor }) => backgroundColor};

  padding: 0.8rem 1.2rem;

  .tag-text {
    font-size: 1.6rem;
    font-weight: 400;

    color: ${({ textColor }) => textColor};
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;

    .tag-text {
      font-size: 1.2rem;
    }
  }
`;
