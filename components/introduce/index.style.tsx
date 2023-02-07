import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;

  width: 100%;
  height: 100vh;

  background: url('/image/background-dark.png');
  background-size: cover;
  background-repeat: repeat;

  display: flex;
  align-items: center;

  padding: 14rem;
  box-sizing: border-box;

  .contents {
    margin-left: 6rem;
  }

  .description {
    opacity: 0;

    font-size: 2.4rem;
    font-weight: 200;
    line-height: 140%;

    color: ${({ theme }) => theme.gray1};

    margin-top: 3.2rem;

    animation: description-opening 1s 1s forwards;

    .highlight {
      font-weight: 600;

      color: ${({ theme }) => theme.primary};
    }
  }

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 0 6.4rem;

    .contents {
      margin-left: 0;
      margin-top: 4rem;
    }

    .description {
      margin-top: 2.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0 3.2rem;

    .contents {
      margin-left: 0;
      margin-top: 3.2rem;
    }

    .description {
      margin-top: 2rem;
      font-size: 2rem;
    }
  }

  @keyframes description-opening {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 50%;
  max-width: 36rem;
  min-width: 28rem;

  opacity: 0;

  animation: opening 1s 1s forwards;

  @keyframes opening {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
