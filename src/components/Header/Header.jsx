// Header.jsx
import './Header.css';
import Navbar from '../Navbar/Navbar';

function Header() {
  return (
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
        <p><a><img src="image/Frame.png" alt="Logo" className="header__logo logo" /></a></p>
        <Navbar />
        <button className="header__login" type="button">Partners Resources</button>
      </div>
    </header>
  );
}

export default Header;