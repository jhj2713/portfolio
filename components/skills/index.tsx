import { descriptions, tags } from '@/constant/data/skills';
import MenuTitle from '../menu-title';
import Tag from '../tag';
import { Container } from './index.style';
import color from '@/styles/color.style';

export default function Skills() {
  return (
    <Container>
      <div>
        <MenuTitle title="Skills" />
      </div>
      <div className="contents">
        {descriptions.map((des, index) => (
          <div key={index} className="description">
            <div className="list-style">
              <div className="circle" />
            </div>
            <div className="description-text">
              {des.map((text, idx) =>
                idx % 2 === 1 ? (
                  <p key={idx} className="highlight">
                    {text}
                  </p>
                ) : (
                  text
                )
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="tags">
        {tags.map((tagLine, index) => (
          <div key={index}>
            {tagLine.map((tag, idx) => (
              <div key={idx} className="tag">
                <Tag borderColor={color.primary} backgroundColor="transparent" textColor={color.primary} text={tag} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}
