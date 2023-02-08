import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;

  width: 100%;
  height: 100vh;

  background: url('/image/background-light.png');
  background-size: cover;
  background-repeat: repeat;

  display: flex;
  align-items: center;

  box-sizing: border-box;

  .swiper-item {
    width: 100vw;
  }
`;

export const Project = styled.div<{ color: string }>`
  display: flex;
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
`;

export const Mockup = styled.img`
  width: 50%;
  max-width: 32rem;
  min-width: 24rem;
`;

export const ProjectImage = styled.img`
  position: absolute;
  left: 0.8rem;
  top: 0.8rem;

  width: 40%;
  max-width: 30rem;
  min-width: 22.5rem;
`;
