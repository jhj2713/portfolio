import { ExitImage, Wrapper } from './index.style';
import { IModal } from './index.type';

export default function Modal({ children, modalRef, closeModal }: IModal) {
  return (
    <Wrapper>
      <div ref={modalRef} className="container">
        <ExitImage alt="exit modal" src="/image/exit.svg" onClick={closeModal} />
        <div className="contents">{children}</div>
      </div>
    </Wrapper>
  );
}
