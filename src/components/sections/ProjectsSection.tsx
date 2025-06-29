import React from 'react';
import CardList from '../cards/CardList'; // Исправленный путь

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects__title">Our Products</h2>
        <CardList />
      </div>
    </section>
  );
};

export default ProjectsSection;