import { Title } from './index.style';

export default function MenuTitle({ title }: { title: string }) {
  return (
    <Title>
      <h1 className="text">{title}</h1>
      <div className="line" />
    </Title>
  );
}
