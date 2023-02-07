import { Container } from './index.style';
import { ITag } from './index.type';

export default function Tag({ borderColor, backgroundColor, textColor, text }: ITag) {
  return (
    <Container borderColor={borderColor} backgroundColor={backgroundColor} textColor={textColor}>
      <p className="tag-text">{text}</p>
    </Container>
  );
}
