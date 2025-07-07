import React from 'react';

const PhotoServiceSection: React.FC = () => {
  return (
    <div className="photo__service">
      <section className="section__photo" id="photo">
        <div className="background__content">
          <img src="img/Rectangle.png" alt="Building" className="photo__image" />
        </div>
        <div className="photo__content"></div>
      </section>
      <section className="section__services" id="services">
        <div className="services__content">
          <div className="services__texts">
            <h1 className="services__title"><b>Новый продукт</b></h1>
            <h2 className="services__subtitle">BACwALL 437 FCU</h2>
            <ul>
              <li className="services__text-update">Полностью перепрограммируемый комнатный контроллер FCU BACnet</li>
              <li className="services__text-advantages">Богатые возможности и экономичность</li>
            </ul>
            <a href="#" className="services__item-link--active">Посмотреть продукт →</a>
            <img src="img/Line_2.png" alt="" className="line_2" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoServiceSection;