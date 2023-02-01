import styled from '@emotion/styled';

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background: url('/image/background-dark.png');

  .line {
    width: 50rem;
    height: 0.2rem;

    background-color: ${({ theme }) => theme.gray1};
    border-radius: 1rem;
  }

  .top {
    animation: line-opening 1.5s ease-in-out, transform-top 1.5s 1.5s ease-in-out forwards;

    @keyframes transform-top {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-12rem);
      }
    }
  }

  .bottom {
    animation: line-opening 1.5s ease-in-out, transform-bottom 1.5s 1.5s ease-in-out forwards;

    @keyframes transform-bottom {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(12rem);
      }
    }
  }

  @keyframes line-opening {
    0% {
      width: 0;
    }
    100% {
      width: 50rem;
    }
  }
`;

export const Title = styled.div`
  position: absolute;

  h1 {
    font-size: 6.4rem;
    font-weight: 900;
    letter-spacing: 0.6rem;

    color: ${({ theme }) => theme.gray1};

    + h1 {
      margin-top: 0.4rem;
    }
  }

  .name {
    opacity: 0;
    animation: transform-title 1.5s 1.5s ease-in-out forwards;

    @keyframes transform-title {
      0% {
        opacity: 1;
        clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
        transform: translateY(6rem);
      }
      100% {
        opacity: 1;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        transform: translateY(0);
      }
    }
  }

  .portfolio {
    opacity: 0;
    animation: transform-portfolio 1.5s 1.5s ease-in-out forwards;

    @keyframes transform-portfolio {
      0% {
        opacity: 1;
        clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
        transform: translateY(-6rem);
      }
      100% {
        opacity: 1;
        clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%);
        transform: translateY(0);
      }
    }
  }
`;
