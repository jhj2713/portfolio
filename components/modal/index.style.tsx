import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.gray8};

    padding: 2.4rem;

    width: calc(100vw - 16rem);
    max-height: calc(100vh - 12rem);
    height: auto;

    max-width: 98rem;

    box-sizing: border-box;

    animation: modal-opening 0.5s;
  }

  .contents {
    max-height: calc(100vh - 22rem);
    margin: 1.2rem 2rem;

    overflow: auto;
  }

  @media (max-width: 820px) {
    .container {
      width: calc(100vw - 10rem);
    }

    .contents {
      margin: 1.2rem 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .container {
      width: calc(100vw - 4.8rem);
      max-height: calc(100vh - 12rem);

      padding: 2rem;
    }

    .contents {
      max-height: calc(100vh - 20rem);
      margin: 1.2rem 0.6rem;
    }
  }

  @keyframes modal-opening {
    0% {
      transform: scale(0);
    }
    80% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const ExitImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  cursor: pointer;

  @media (max-width: 820px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 480px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
