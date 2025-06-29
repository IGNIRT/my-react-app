import React from 'react';
import CardList from '../../cards/CardList'; // Исправленный путь

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects">
      <div className="container">
        <CardList />
      </div>
    </section>
  );
};

export default ProjectsSection;