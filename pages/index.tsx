import { MainContainer, ScrollBox, Title } from './index.style';

export default function Home() {
  return (
    <MainContainer>
      <div className="line top" />
      <Title>
        <h1 className="name">Hyojeong</h1>
        <h1 className="portfolio">Portfolio</h1>
      </Title>
      <div className="line bottom" />
      <ScrollBox>
        <div className="icon" />
        <p className="text">scroll down</p>
      </ScrollBox>
    </MainContainer>
  );
}
