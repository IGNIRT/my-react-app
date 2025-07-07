import React from 'react';

const SpeciesSection: React.FC = () => {
  return (
    <section className="section__species" id="species">
      <div className="species__content">
        <div className="species__card">
          <p className="species__title">Не знаете, какие решения вам нужны?</p>
          <a href="#" className="species__text">Сравните решения →</a>
        </div>
        <div className="species__card-2_3">
          <div className="species__2">
            <p className="subtitle">
              Дистрибьюторы</p>
          </div>
          <div className="species__card-3">
            <div className="species__system-integrators">
              <p className="species__title-card-3">
                Системные интеграторы</p>
              <p className="species__item-link">Страто Энтерпрайз</p>
              <img src="img/Line 4.png" alt="Line" className="species__img" />
              <p  className="species__item-link--strato-cloud-services">Облачные сервисы Страто </p>
            </div>
            <div className="species__energy">
              <p className="species__title-card-3">Энергосервисная компания/MSI</p>
              <p className="species__item-link--strato-enterprise">Страто Энтерпрайз</p>
              <img src="img/Line 5.png" alt="Line-1" className="species__img-line-1" />
              < p className="species__item-link--strato-cloud-services">
                Облачные сервисы Страто</p>
              <img src="img/Line 6.png" alt="Line-2" className="species__img-line-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeciesSection;