import React from 'react';
import { Link } from 'react-router-dom';

const SolutionsSection: React.FC = () => {
  return (
    <section className="section__solutions" id="solutions">
      <div className="solutions__content">
        <h2 className="solutions__title">Решения</h2>
        <h1 className="solutions__subtitle">Найдите комбинацию, которая подходит вашему проекту</h1>
        <div className="solutions__link">
          <Link to="/cards" className="solutions__item-link--active">
            Узнать больше →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;