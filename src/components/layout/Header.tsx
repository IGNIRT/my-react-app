import React from 'react';
import Navbar from './Navbar';

interface HeaderProps {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => (
  <header className="header container">
    <div className="header__div">
      <ul className="header__list">
        <li><a href="#" className="header__item-link">Collaborations</a></li>
        <li><a href="#" className="header__item-link--active-document">Documentation</a></li>
        <li><a href="#" className="header__item-link--active-contact">Contact</a></li>
      </ul>
      <div className="header__language">
        <a href="#" className="En">En</a>
        <a href="#" className="Fr">Fr</a>
      </div>
    </div>
    <div className="header_2">
      <a href="#">
        <img src="/images/Frame.png" alt="Logo" className="header__logo logo" />
      </a>
      <Navbar openModal={openModal} />
    </div>
  </header>
);

export default Header;