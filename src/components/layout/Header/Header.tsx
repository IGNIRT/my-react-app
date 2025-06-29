// src/components/layout/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link

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
     <Link to="/">
        <img src="img/Frame.png" alt="Logo" className="header__logo logo" />
      </Link>
      <nav className="header__nav">
        <ul className="header__list_2">
          <li><a href="#" className="header__item-link-solution">Solutions</a></li>
          <li><a href="#" className="header__item-link-products">Products</a></li>
          <li><a href="#" className="header__item-link-about_us">About us</a></li>
        </ul>
      </nav>
      <button className="header__login" onClick={openModal}>
        Partners Resources
      </button>
    </div>
  </header>
);

export default Header;