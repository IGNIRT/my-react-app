// src/components/layout/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  openModal: () => void;
}
const Header: React.FC<HeaderProps> = ({ openModal }) => (
  <header className="header container">
    <div className="header__div">
      <ul className="header__list">
        <li><a href="#" className="header__item-link">
          Сотрудничество</a></li>
        <li><a href="#" className="header__item-link--active-document">Документация</a></li>
        <li><a href="#" className="header__item-link--active-contact">
          Контакт</a></li>
      </ul>
      <div className="header__language">
        <a href="#" className="En">Ан</a>
        <a href="#" className="Fr">Ру</a>
      </div>

    </div>
    <div className="header_2">
      <Link to="/">
        <img src="img/Frame.png" alt="Logo" className="header__logo logo" />
      </Link>
      <nav className="header__nav">
        <ul className="header__list_2">
          <li><a href="#" className="header__item-link-solution">
            Решения</a></li>
          <li><a href="#" className="header__item-link-products">
            Продукты</a></li>
          <li><a href="#" className="header__item-link-about_us">
            О нас</a></li>
        </ul>
      </nav>
      <button className="header__login" onClick={openModal}>
        Регистрация
      </button>
    </div>
  </header>
);

export default Header;