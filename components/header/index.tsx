import { MODE } from '@/constant/display-mode';
import { MENU_MAP, sideMenu, SIDE_MENU } from '@/constant/sidebar-menu';
import { SWIPE_MODE } from '@/constant/swipe-mode';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Hamburger, Container, SideMenu, Menu } from './index.style';
import { IHeader } from './index.type';

export default function Header({ mode, selectedMenu, setPageIndex, setIsUnmount }: IHeader) {
  const [isToggle, setIsToggle] = useState<boolean>(false);
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

    let delay = 1000;
    if (mode === MODE.DARK && (MENU_MAP[id] === SIDE_MENU.PROJECTS || MENU_MAP[id] === SIDE_MENU.EXPERIENCES)) {
      delay = 1500;
    } else if (
      mode === MODE.LIGHT &&
      (MENU_MAP[id] === SIDE_MENU.INTRODUCE || MENU_MAP[id] === SIDE_MENU.SKILLS || MENU_MAP[id] === SIDE_MENU.CONTACT)
    ) {
      delay = 1500;
    }

    const timer = setTimeout(() => {
      setIsUnmount(SWIPE_MODE.NOT_MOUNTED);
      router.push(`/?id=${id}`);
      setPageIndex(MENU_MAP[id]);
      clearTimeout(timer);
    }, delay);
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
