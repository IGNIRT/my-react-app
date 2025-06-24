import React from 'react';

const SpeciesSection: React.FC = () => {
  return (
    <section className="section__species" id="species">
      <div className="species__content">
        <div className="species__card">
          <p className="species__title">Don’t know what kind of solutions you need?</p>
          <a href="#" className="species__text">Compare the solutions →</a>
        </div>
        <div className="species__card-2_3">
          <div className="species__2">
            <p className="subtitle">Distributors</p>
          </div>
          <div className="species__card-3">
            <div className="species__system-integrators">
              <p className="species__title-card-3">System Integrators</p>
              <a href="#" className="species__item-link--strato-enterprise">Strato Enterprise →</a>
              <img src="/images/Line_4.png" alt="Line" className="species__img" />
              <a href="#" className="species__item-link--strato-cloud-services">Strato Cloud Services →</a>
            </div>
            <div className="species__energy">
              <p className="species__title-card-3">Energy Service company/MSI</p>
              <a href="#" className="species__item-link--strato-enterprise">Strato Enterprise →</a>
              <img src="/images/Line_5.png" alt="Line-1" className="species__img-line-1" />
              <a href="#" className="species__item-link--strato-cloud-services">Strato Cloud Services →</a>
              <img src="/images/Line_6.png" alt="Line-2" className="species__img-line-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeciesSection;