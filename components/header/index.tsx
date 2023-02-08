import { MENU_MAP } from '@/constant/sidebar-menu';
import { SWIPE_MODE } from '@/constant/swipe-mode';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Hamburger, Container, SideMenu, Menu } from './index.style';
import { IHeader } from './index.type';

const sideMenu = [
  { description: 'Introduce', route: 'introduce' },
  { description: 'Skills', route: 'skills' },
  {
    description: 'Projects',
    route: 'projects',
  },
  { description: 'Experiences', route: 'experiences' },
  { description: 'Contact', route: 'contact' },
];

export default function Header({ isToggle, setIsToggle, mode, selectedMenu, setPageIndex, setIsUnmount }: IHeader) {
  const [isFadeout, setIsFadeout] = useState<boolean>(false);
  const router = useRouter();

  const handleToggle = () => {
    if (isToggle) {
      setIsFadeout(true);
      const timer = setTimeout(() => {
        setIsFadeout(false);
        clearTimeout(timer);
      }, 500);
    }
    setIsToggle(!isToggle);
  };

  const handleRouting = (id: string) => {
    handleToggle();
    setIsUnmount(SWIPE_MODE.DOWN);
    const timer = setTimeout(() => {
      setIsUnmount(SWIPE_MODE.NOT_MOUNTED);
      router.push(`/?id=${id}`);
      setPageIndex(MENU_MAP[id]);
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <Container mode={mode}>
      <div className="header">
        <p className="title">Front-end Portfolio</p>
        <Hamburger isToggle={isToggle} onClick={handleToggle} mode={mode}>
          <div className="hamburger-bar-1" />
          <div className="hamburger-bar-2" />
          <div className="hamburger-bar-3" />
        </Hamburger>
      </div>
      {isToggle || isFadeout ? (
        <SideMenu mode={mode} isFadeout={isFadeout}>
          {sideMenu.map((menu, idx) => (
            <Menu key={idx} isSelected={idx + 1 === selectedMenu} mode={mode} onClick={() => handleRouting(menu.route)}>
              {menu.description}
            </Menu>
          ))}
        </SideMenu>
      ) : null}
    </Container>
  );
}
