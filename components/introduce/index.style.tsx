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

  @keyframes description-opening {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Title = styled.div`
  display: inline-block;

  .line {
    height: 2px;
    width: 14rem;

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

  @keyframes underline-opening {
    0% {
      width: 0;
    }
    100% {
      width: 14rem;
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

export const ProfileImage = styled.img`
  width: 32rem;
  height: 32rem;

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
