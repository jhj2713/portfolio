import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background: url('/image/background-dark.png');
  background-size: cover;
  background-repeat: repeat;

  font-size: 2.4rem;
  font-weight: 400;

  color: ${({ theme }) => theme.gray1};

  .contact {
    display: flex;

    width: 60rem;

    + .contact {
      margin-top: 6.4rem;
    }
  }

  .method {
    display: flex;
    width: 25rem;

    p {
      margin-left: 1.2rem;
    }
  }

  .value {
    transition: 0.5s;

    color: ${({ theme }) => theme.gray1};

    :hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    padding: 0 3.2rem;

    .contact {
      display: flex;
      flex-direction: column;

      width: 100%;

      + .contact {
        margin-top: 4.6rem;
      }
    }

    .method {
      align-items: center;
    }

    .value {
      margin-top: 1rem;
    }

    img {
      width: 2.8rem;
    }
  }
`;
