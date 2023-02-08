import { useEffect, useRef, useState } from 'react';

export default function useModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpenModal]);

  const toggleModal = () => {
    setIsOpenModal((prevIsOpenModal) => !prevIsOpenModal);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleOutsideClick = (e: Event) => {
    const current = modalRef.current;
    if (isOpenModal && current && !current.contains(e.target as Node)) setIsOpenModal(false);
  };

  return { isOpenModal, modalRef, toggleModal, closeModal, openModal };
}
