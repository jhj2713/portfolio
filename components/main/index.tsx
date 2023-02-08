import { ISwipeMode } from '@/constant/swipe-mode';
import { Container, ScrollBox, Title } from './index.style';

export default function Main({ isUnmount }: { isUnmount: ISwipeMode }) {
  return (
    <Container isUnmount={isUnmount}>
      <div className="line top" />
      <Title>
        <div className="name">
          <h1>H</h1>
          <h1>y</h1>
          <h1>o</h1>
          <h1>j</h1>
          <h1>e</h1>
          <h1>o</h1>
          <h1>n</h1>
          <h1>g</h1>
        </div>
        <div className="portfolio">
          <h1>P</h1>
          <h1>o</h1>
          <h1>r</h1>
          <h1>t</h1>
          <h1>f</h1>
          <h1>o</h1>
          <h1>l</h1>
          <h1>i</h1>
          <h1>o</h1>
        </div>
      </Title>
      <div className="line bottom" />
      <ScrollBox>
        <div className="icon" />
        <p className="text">scroll down</p>
      </ScrollBox>
    </Container>
  );
}
