import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;

  width: 100%;
  height: 100vh;

  background: url('/image/background-dark.png');
  background-size: cover;
  background-repeat: repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 9.6rem;
  box-sizing: border-box;

  .contents {
    margin-top: 4rem;
    opacity: 0;

    animation: skills-opening 1s 1s forwards;
  }

  .tags {
    margin-top: 3.6rem;

    opacity: 0;

    animation: skills-opening 1s 1s forwards;
  }

  .description {
    display: flex;

    + .description {
      margin-top: 1.6rem;
    }
  }

  .description-text {
    font-size: 2.4rem;
    font-weight: 200;
    line-height: 140%;

    color: ${({ theme }) => theme.gray1};
  }

  .highlight {
    font-weight: 600;

    color: ${({ theme }) => theme.primary};
  }

  .list-style {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1.2rem;

    .circle {
      width: 0.6rem;
      height: 0.6rem;

      background-color: ${({ theme }) => theme.primary};

      border-radius: 50%;
    }
  }

  @keyframes skills-opening {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
