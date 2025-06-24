// src/components/layout/Navbar.tsx
import React from 'react';

interface NavbarProps {
  openModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ openModal }) => (
  <nav className="header__nav">
    <ul className="header__list_2">
      <li><a href="#" className="header__item-link-solution">Solutions</a></li>
      <li><a href="#" className="header__item-link-products">Products</a></li>
      <li><a href="#" className="header__item-link-about_us">About us</a></li>
    </ul>
    <button className="header__login" onClick={openModal}>
      Partners Resources
    </button>
  </nav>
);

export default Navbar;