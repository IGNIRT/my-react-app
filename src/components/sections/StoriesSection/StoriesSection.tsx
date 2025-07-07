import React from 'react';

const StoriesSection: React.FC = () => {
  return (
    <section className="section__stories" id="stories">
      <div className="stories__content">
        <img src="img/Ceray_dom.png" alt="Gray building" className="stories__img" />
        <article className="stories__success-stories">
          <div className="stories">
            <p className="stories__title">
              Истории успеха</p>
            <p className="stories__text">
              Сотни проектов, реализованных за 10 лет. Все типы зданий выиграют от решения Strato Automation™.
            </p>
            <a href="#" className="stories__item-link--our-collaborations">Наше сотрудничество →</a>
            <div className="create-line__2"></div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default StoriesSection;