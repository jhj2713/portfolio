import Tag from '../tag';
import { Container, Mockup, ModalContents, Experience, ProjectImage } from './index.style';
import MacPointer from '@/public/image/mac-pointer.svg';
import { Dispatch, useEffect, useState } from 'react';
import Swiper from '../swiper';
import Modal from '../modal';
import useModal from '@/hooks/useModal';
import { experiences, IExperience } from '@/constant/data/experiences';
import Link from 'next/link';

export default function Experiences({ setPointerColor }: { setPointerColor: Dispatch<string> }) {
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
    <Container>
      <Swiper itemCount={2} colors={experiences.map((p) => p.color)} setPointerColor={setPointerColor}>
        {experiences.map((experience, idx) => (
          <div key={experience.title} className="swiper-item">
            <Experience color={experience.color}>
              <div className="left">
                <Mockup alt="IMAC mockup" src="/image/mac-mockup.png" />
                <ProjectImage alt="project image" src={experience.imageUrl} onClick={() => handleDetail(idx)} />
                <div className="mac-pointer">
                  <MacPointer fill={experience.color} />
                </div>
              </div>
              <div className="right">
                <div className="title">
                  {experience.title.split('').map((text, idx) => (
                    <h1 key={idx}>{text}</h1>
                  ))}
                </div>
                <div className="contents">
                  {experience.description.map((des, idx) =>
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
                  {experience.tags.map((tag, idx) => (
                    <div key={idx} className="tag">
                      <Tag
                        borderColor={experience.color}
                        backgroundColor="transparent"
                        textColor={experience.color}
                        text={tag}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Experience>
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
