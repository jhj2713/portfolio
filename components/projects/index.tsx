import { projects } from '@/constant/data/projects';
import Tag from '../tag';
import { Container, Mockup, Project, ProjectImage } from './index.style';
import { IProjects } from './index.type';
import MacPointer from '@/public/image/mac-pointer.svg';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Projects({ setPointerColor }: IProjects) {
  const swiperContainerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);

  const start = useRef<number>(0);
  const current = useRef<number>(0);

  useEffect(() => {
    if (!swiperRef.current) return;

    swiperRef.current.addEventListener('touchstart', handleTouchStart);
    swiperRef.current.addEventListener('touchend', handleTouchEnd);

    swiperRef.current.addEventListener('mousedown', handleMouseStart);
    swiperRef.current.addEventListener('mouseup', handleMouseEnd);

    return () => {
      swiperRef.current?.removeEventListener('touchstart', handleTouchStart);
      swiperRef.current?.removeEventListener('touchend', handleTouchEnd);

      swiperRef.current?.removeEventListener('mousedown', handleMouseStart);
      swiperRef.current?.removeEventListener('mouseup', handleMouseEnd);
    };
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    start.current = e.touches[0].pageX;
  };

  const handleMouseStart = (e: MouseEvent) => {
    start.current = e.pageX;
  };

  const handleEnd = (endX: number) => {
    if (!swiperContainerRef.current || !swiperRef.current) return;

    const width = swiperContainerRef.current.clientWidth;

    let destination = current.current;
    if (endX - start.current < -(width / 3) / 3) {
      destination -= width / 3;
    } else if (endX - start.current > width / 3 / 3) {
      destination += width / 3;
    }

    if (destination <= -width || destination > 0) return;
    swiperRef.current.style.transform = `translate3d(${destination}px, 0px, 0px)`;
    swiperRef.current.style.transitionDuration = '300ms';
    current.current = destination;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    handleEnd(e.changedTouches[0].pageX);
  };

  const handleMouseEnd = (e: MouseEvent) => {
    handleEnd(e.pageX);
  };

  const swipeLeft = () => {
    if (!swiperContainerRef.current) return;
    start.current = 0;
    handleEnd(swiperContainerRef.current.clientWidth);
  };

  const swipeRight = () => {
    if (!swiperContainerRef.current) return;
    start.current = swiperContainerRef.current.clientWidth / 3;
    handleEnd(0);
  };

  return (
    <Container>
      <div ref={swiperContainerRef} className="swiper-container">
        <div ref={swiperRef} className="swiper">
          {projects.map((project) => (
            <div key={project.title} className="swiper-item">
              <Project color={project.color}>
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
        </div>
      </div>
      <div className="swiper-button swiper-left" onClick={swipeLeft}>
        <Image alt="swipe left" src="/image/swiper.svg" width={30} height={56} />
      </div>
      <div className="swiper-button swiper-right" onClick={swipeRight}>
        <Image alt="swipe right" src="/image/swiper.svg" width={30} height={56} />
      </div>
    </Container>
  );
}
