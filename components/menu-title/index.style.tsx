import styled from '@emotion/styled';

export const Title = styled.div`
  display: inline-block;

  .line {
    height: 2px;

    background-color: ${({ theme }) => theme.primary};

    animation: underline-opening 1s;
  }

  .text {
    font-size: 4rem;
    font-weight: 800;

    color: ${({ theme }) => theme.primary};

    opacity: 0;

    animation: text-opening 1s 1s forwards;
  }

  @media (max-width: 480px) {
    .text {
      font-size: 3.2rem;
    }
  }

  @keyframes underline-opening {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes text-opening {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
