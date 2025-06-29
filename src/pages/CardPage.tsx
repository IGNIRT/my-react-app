// src/pages/CardsPage.tsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CardList from '../components/cards/CardList';

const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  return (
    <div>
      <h1 className="section-title">All Cards</h1>
      <CardList limit={limit} />
    </div>
  );
};

export default CardsPage;