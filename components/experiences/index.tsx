import Tag from '../tag';
import { Container, ModalContents } from './index.style';
import { useEffect, useState } from 'react';
import Swiper from '../swiper';
import Modal from '../modal';
import useModal from '@/hooks/useModal';
import { experiences, IExperience } from '@/constant/data/experiences';
import Link from 'next/link';
import { IExperiences } from './index.type';
import SwiperItem from '../swiper-item';

export default function Experiences({ setPointerColor, isUnmount }: IExperiences) {
  const { modalRef, isOpenModal, openModal, closeModal } = useModal();
  const [detailContents, setDetailContents] = useState<IExperience>({
    title: '',
    description: [],
    color: '',
    tags: [],
    imageUrl: '',
    contents: [],
  });

  useEffect(() => {
    setPointerColor(experiences[0].color);
  }, []);

  const handleDetail = (idx: number) => {
    setDetailContents(experiences[idx]);
    openModal();
  };

  return (
    <Container isUnmount={isUnmount}>
      <Swiper itemCount={2} colors={experiences.map((p) => p.color)} setPointerColor={setPointerColor}>
        {experiences.map((experience, idx) => (
          <div key={experience.title} className="swiper-item">
            <SwiperItem item={experience} idx={idx} handleDetail={handleDetail} />
          </div>
        ))}
      </Swiper>
      {isOpenModal ? (
        <Modal modalRef={modalRef} closeModal={closeModal}>
          <ModalContents color={detailContents.color}>
            <h1 className="modal-title">{detailContents.title}</h1>
            <h3 className="modal-description">{detailContents.description}</h3>
            <div className="modal-tags">
              {detailContents.tags.map((tag, idx) => (
                <Tag
                  key={idx}
                  borderColor={detailContents.color}
                  backgroundColor="transparent"
                  textColor={detailContents.color}
                  text={tag}
                />
              ))}
            </div>
            <h2 className="modal-subtitle">활동 내용</h2>
            <div className="modal-contents">
              {detailContents.contents.map((content) =>
                content.map(({ text, link, date }, idx) =>
                  idx > 0 ? (
                    <div key={idx} className="modal-text tab">
                      <div className="list-style">
                        <div className="circle" />
                      </div>
                      <div>
                        {text}
                        {link ? (
                          <Link className="link" href={link} target="_blank">
                            Learn More
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  ) : (
                    <div key={idx} className="modal-text">
                      <div className="list-style">
                        <div className="circle" />
                      </div>
                      <div>
                        {text}
                        {date ? <p className="date">({date})</p> : null}
                      </div>
                    </div>
                  )
                )
              )}
            </div>
          </ModalContents>
        </Modal>
      ) : null}
    </Container>
  );
}
