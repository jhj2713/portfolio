import { useState } from 'react';
import { Hamburger, Container, SideMenu, Menu } from './index.style';
import { IHeader } from './index.type';

const sideMenu = ['Introduce', 'Skills', 'Projects', 'Experiences', 'Contact'];

export default function Header({ isToggle, setIsToggle, mode, selectedMenu }: IHeader) {
  const [isFadeout, setIsFadeout] = useState<boolean>(false);

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
            <Menu key={idx} isSelected={idx + 1 === selectedMenu} mode={mode}>
              {menu}
            </Menu>
          ))}
        </SideMenu>
      ) : null}
    </Container>
  );
}
