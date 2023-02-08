import { projects, IProject } from '@/constant/data/projects';
import Tag from '../tag';
import { Container, Mockup, ModalContents, Project, ProjectImage } from './index.style';
import { IProjects } from './index.type';
import MacPointer from '@/public/image/mac-pointer.svg';
import { useEffect, useState } from 'react';
import Swiper from '../swiper';
import Modal from '../modal';
import useModal from '@/hooks/useModal';
import color from '@/styles/color.style';
import Link from 'next/link';

export default function Projects({ setPointerColor }: IProjects) {
  const { modalRef, isOpenModal, openModal, closeModal } = useModal();
  const [detailContents, setDetailContents] = useState<IProject>({
    title: '',
    description: [],
    color: '',
    dates: [],
    tags: [],
    imageUrl: '',
    role: [],
    contribution: [],
    link: '',
    github: '',
  });

  useEffect(() => {
    setPointerColor(projects[0].color);
  }, []);

  const handleDetail = (idx: number) => {
    setDetailContents(projects[idx]);
    openModal();
  };

  return (
    <Container>
      <Swiper itemCount={3} colors={projects.map((p) => p.color)} setPointerColor={setPointerColor}>
        {projects.map((project, idx) => (
          <div key={project.title} className="swiper-item">
            <Project color={project.color}>
              <div className="left">
                <Mockup alt="IMAC mockup" src="/image/mac-mockup.png" />
                <ProjectImage alt="project image" src={project.imageUrl} onClick={() => handleDetail(idx)} />
                <div className="mac-pointer">
                  <MacPointer fill={project.color} />
                </div>
              </div>
              <div className="right">
                <div className="top">
                  <div className="title">
                    {project.title.split('').map((text, idx) => (
                      <h1 key={idx}>{text}</h1>
                    ))}
                  </div>
                  <p className="date">
                    {project.dates[0]} ~ {project.dates[1]}
                  </p>
                </div>
                <div className="contents">
                  {project.description.map((des, idx) =>
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
                  {project.tags.map((tag, idx) => (
                    <div key={idx} className="tag">
                      <Tag
                        borderColor={project.color}
                        backgroundColor="transparent"
                        textColor={project.color}
                        text={tag}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Project>
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
            <h2 className="modal-subtitle">맡은 역할</h2>
            <div className="modal-contents">
              {detailContents.role.map((role) =>
                role.map((text, idx) =>
                  idx > 0 ? (
                    <div key={idx} className="modal-text tab">
                      <div className="list-style">
                        <div className="circle" />
                      </div>
                      <p>{text}</p>
                    </div>
                  ) : (
                    <div key={idx} className="modal-text">
                      <div className="list-style">
                        <div className="circle" />
                      </div>
                      <p>{text}</p>
                    </div>
                  )
                )
              )}
            </div>
            <h2 className="modal-subtitle">기여한 바</h2>
            <div className="modal-contents">
              {detailContents.contribution.map((role) =>
                role.map((text, idx) =>
                  idx > 0 ? (
                    <div key={idx} className="modal-text tab">
                      <div className="list-style">
                        <div className="circle" />
                      </div>
                      <p>{text}</p>
                    </div>
                  ) : (
                    <div key={idx} className="modal-text">
                      <div className="list-style">
                        <div className="circle" />
                      </div>
                      <p>{text}</p>
                    </div>
                  )
                )
              )}
            </div>
            <div className="modal-bottom">
              {detailContents.link ? (
                <Link className="link" href={detailContents.link} target="_blank">
                  <Tag
                    borderColor={detailContents.color}
                    backgroundColor={detailContents.color}
                    textColor={color.gray8}
                    text="서비스 링크"
                  />
                </Link>
              ) : null}
              <Link className="github" href={detailContents.github} target="_blank">
                <Tag
                  borderColor={detailContents.color}
                  backgroundColor={detailContents.color}
                  textColor={color.gray8}
                  text="Github"
                />
              </Link>
            </div>
          </ModalContents>
        </Modal>
      ) : null}
    </Container>
  );
}
