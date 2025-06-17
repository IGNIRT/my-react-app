// Footer.jsx
import './Footer.css';

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__content">
        <div clasы="footer__logo-year">
          <img src="image/logga.png" class="footer__logo" alt="Logo" />
          <p className="footer__title">©2020</p>
        </div>
        <div className="footer__connection-list">
          <p className="footer__title">Contact</p>
          <p className="footer__subtitle">6595 Rue Saint-Urbain (Suite 300)</p>
          <p className="footer__lead">Montréal, QC H2S 3G6</p>
          <p className="footer__tagline">Canada</p>
          <p className="footer__text">514 687-1902</p>
          <a href="#" className="footer__item-link--info">info@stratoautomation.com</a>
        </div>
        {/* Остальные блоки футера */}
      </div>
    </footer>
  );
}

export default Footer;
