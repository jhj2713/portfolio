import { ReactNode, RefObject } from 'react';

export interface IModal {
  children: ReactNode;
  modalRef: RefObject<HTMLDivElement>;
  closeModal: () => void;
}
