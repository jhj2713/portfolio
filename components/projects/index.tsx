import { projects } from '@/constant/data/projects';
import Tag from '../tag';
import { Container, Mockup, Project, ProjectImage } from './index.style';
import { IProjects } from './index.type';
import MacPointer from '@/public/image/mac-pointer.svg';

export default function Projects({ setPointerColor }: IProjects) {
  return (
    <Container>
      {projects.map((project) => (
        <Project key={project.title} color={project.color}>
          <div className="left">
            <Mockup alt="IMAC mockup" src="/image/mac-mockup.png" />
            <ProjectImage alt="project image" src={project.imageUrl} />
            <div className="mac-pointer">
              <MacPointer fill={project.color} />
            </div>
          </div>
          <div className="right">
            <div className="top">
              <h1 className="title">{project.title}</h1>
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
                  <Tag borderColor={project.color} backgroundColor="transparent" textColor={project.color} text={tag} />
                </div>
              ))}
            </div>
          </div>
        </Project>
      ))}
    </Container>
  );
}
