import React from 'react';

const StoriesSection: React.FC = () => {
  return (
    <section className="section__stories" id="stories">
      <div className="stories__content">
        <img src="img/Ceray_dom.png" alt="Gray building" className="stories__img" />
        <article className="stories__success-stories">
          <div className="stories">
            <p className="stories__title">Success Stories</p>
            <p className="stories__text">
              Hundreds of projects delivered in 10 years +. All types of buildings will benefit from a Strato Automation™ solution.
            </p>
            <a href="#" className="stories__item-link--our-collaborations">Our collaborations →</a>
            <div className="create-line__2"></div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default StoriesSection;