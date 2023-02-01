import { MainContainer, Title } from './index.style';

export default function Home() {
  return (
    <MainContainer>
      <div className="line top" />
      <Title>
        <h1 className="name">Hyojeong</h1>
        <h1 className="portfolio">Portfolio</h1>
      </Title>
      <div className="line bottom" />
    </MainContainer>
  );
}
