import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom

const SolutionsSection: React.FC = () => {
  return (
    <section className="section__solutions" id="solutions">
      <div className="solutions__content">
        <h2 className="solutions__title">Solutions</h2>
        <h1 className="solutions__subtitle">Find the combination that suits your project</h1>
        <div className="solutions__link">
          <Link to="/cards" className="solutions__item-link--active">
            Learn more →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;