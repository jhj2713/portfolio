import styled from '@emotion/styled';

export const Item = styled.div<{ color: string }>`
  display: flex;
  width: 100%;
  margin: 10rem;

  .left {
    position: relative;

    .mac-pointer {
      position: absolute;

      left: -1rem;
      top: 1rem;

      animation: mac-pointer-animation 2s infinite;
    }

    @keyframes mac-pointer-animation {
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(0.8);
      }
      50% {
        transform: scale(1);
      }
    }
  }

  .right {
    margin-left: 8rem;
    flex-grow: 1;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .title {
    font-size: 3.6rem;
    font-weight: 600;

    color: ${({ theme }) => theme.gray8};

    h1 {
      display: inline-block;

      :hover {
        animation: hover-animation 0.5s ease-in-out;
      }

      @keyframes hover-animation {
        0% {
          color: ${({ theme }) => theme.gray8};
        }
        50% {
          color: ${({ color }) => color};
          transform: translateY(-1rem);
        }
        100% {
          color: ${({ theme }) => theme.gray8};
        }
      }
    }
  }

  .date {
    font-size: 1.2rem;
    font-weight: 300;

    color: ${({ theme }) => theme.gray6};
  }

  .contents {
    margin-top: 1.6rem;

    font-size: 2rem;
    font-weight: 300;
    line-height: 150%;

    color: ${({ theme }) => theme.gray8};
  }

  .highlight {
    color: ${({ color }) => color};
  }

  .tags {
    margin-top: 2.4rem;
  }

  .tag {
    display: inline-block;
    margin: 0 0.8rem 1.2rem 0;
  }

  @media (max-width: 820px) {
    flex-direction: column;
    justify-content: center;

    .left {
      align-self: center;
    }

    .right {
      margin-left: 0rem;
      margin-top: 4rem;
    }
  }

  @media (max-width: 480px) {
    margin: 6rem;

    .title {
      font-size: 3.2rem;
    }

    .date {
      display: none;
    }

    .contents {
      font-size: 1.6rem;
    }
  }
`;

export const Mockup = styled.div`
  position: relative;

  width: 32rem;
  height: 26.2rem;

  @media (max-width: 480px) {
    width: 24rem;
    height: 20rem;
  }
`;

export const ProjectImage = styled.img`
  position: absolute;
  left: 0.8rem;
  top: 0.8rem;

  width: calc(100% - 1.6rem);
  max-width: 30rem;
  min-width: 22.5rem;

  cursor: pointer;
`;
