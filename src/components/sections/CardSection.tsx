import React from 'react';

const CardSections: React.FC = () => {
  return (
    <div className="div__promo">
      {/* Promo Section */}
      <section className="section__promo" id="promo">
        <div className="promo__content">
        </div>
      </section>
      {/* Card Section */}
      <section className="section__card" id="card">
        <div className="card__content">
          <img src="public/1.png" alt="Building Automation System" className="card__image"/>
        </div>
      </section>
    </div>
  );
};

export default CardSections;