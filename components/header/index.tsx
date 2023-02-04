import { Hamburger, Container, Menu } from './index.style';
import { IHeader } from './index.type';

const sideMenu = ['Introduce', 'Skills', 'Projects', 'Experiences', 'Contact'];

export default function Header({ isToggle, handleToggle, mode, selectedMenu }: IHeader) {
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
      {isToggle ? (
        <div className="menu">
          {sideMenu.map((menu, idx) => (
            <Menu key={idx} isSelected={idx + 1 === selectedMenu}>
              {menu}
            </Menu>
          ))}
        </div>
      ) : null}
    </Container>
  );
}
