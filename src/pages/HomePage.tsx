// src/pages/HomePage.tsx
import React from 'react';
import CardList from '../components/cards/CardList';

const HomePage: React.FC = () => {
  return (
    <div>
      <CardList limit={3} />
    </div>
  );
};

export default HomePage;