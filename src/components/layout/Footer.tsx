import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo-year">
          <img src="/images/logga.png" className="footer__logo" alt="Strato Automation Logo" />
          <p className="footer__title">©2020</p>
        </div>
        
        <div className="footer__connection-list">
          <p className="footer__title">Contact</p>
          <p className="footer__subtitle">6595 Rue Saint-Urbain (Suite 300)</p>
          <p className="footer__lead">Montréal, QC H2S 3G6</p>
          <p className="footer__tagline">Canada</p>
          <p className="footer__text">514 687-1902</p>
          <a href="mailto:info@stratoautomation.com" className="footer__item-link--info">
            info@stratoautomation.com
          </a>
        </div>
        
        <div className="footer__social">
          <div className="footer__follow">
            <p className="footer__titl">Follow Us</p>
            <div className="footer__social-links">
              <div className="footer__twitter">
                <img src="/images/Twitter.png" className="footer__img" alt="Twitter" />
                <a href="#" className="footer__item-link--active">Twitter</a>
              </div>
              <div className="footer__linkedin">
                <img src="/images/Linkedin.png" className="footer__pic" alt="LinkedIn" />
                <a href="#" className="footer__item-link--linkedin">Linkedin</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer__subscription">
          <p className="footer__title">Subscribe to updates</p>
          <a href="#" className="footer__item-link--email">Email address →</a>
          <img src="/images/Line_12.png" className="footer__image" alt="Divider" />
          <div className="footer__rights">
            <p className="footer__tit">Design and code by MamboMambo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;