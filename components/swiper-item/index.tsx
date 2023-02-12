import Image from 'next/image';
import { Item, Mockup, ProjectImage } from './index.style';
import MacPointer from '@/public/image/swiper/mac-pointer.svg';
import Tag from '../tag';
import { ISwiperItem } from './index.type';

export default function SwiperItem({ item, idx, handleDetail }: ISwiperItem) {
  return (
    <Item color={item.color}>
      <div className="left">
        <Mockup>
          <Image
            alt="IMAC mockup"
            priority
            src="/image/swiper/mac-mockup.png"
            fill
            sizes="(max-width: 480px) 24rem, 32rem"
          />
        </Mockup>
        <ProjectImage alt="project image" src={item.imageUrl} onClick={() => handleDetail(idx)} />
        <div className="mac-pointer">
          <MacPointer fill={item.color} />
        </div>
      </div>
      <div className="right">
        <div className="top">
          <div className="title">
            {item.title.split('').map((text, idx) => (
              <h1 key={idx}>{text}</h1>
            ))}
          </div>
          {item.dates ? (
            <p className="date">
              {item.dates[0]} ~ {item.dates[1]}
            </p>
          ) : null}
        </div>
        <div className="contents">
          {item.description.map((des, idx) =>
            idx % 2 === 1 ? (
              <p key={idx} className="highlight">
                {des}
              </p>
            ) : (
              des
            )
          )}
        </div>
        <div className="tags">
          {item.tags.map((tag, idx) => (
            <div key={idx} className="tag">
              <Tag borderColor={item.color} backgroundColor="transparent" textColor={item.color} text={tag} />
            </div>
          ))}
        </div>
      </div>
    </Item>
  );
}
