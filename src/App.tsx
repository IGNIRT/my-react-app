// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import CardsPage from './pages/CardPage';
import NotFoundPage from './pages/NotFoundPage';
import PromoSection from './components/sections/PromoSection/PromoSection';
import CardSection from './components/sections/CardSection/CardSection';
import PhotoServiceSection from './components/sections/PhotoServiceSection/PhotoServiceSection';
import SolutionsSection from './components/sections/SolutionsSection/SolutionsSection';
import ProjectsSection from './components/sections/ProjectsSection/ProjectsSection';
import SpeciesSection from './components/sections/SpeciesSection/SpeciesSection';
import StoriesSection from './components/sections/StoriesSection/StoriesSection';
import ProductsSection from './components/sections/ProductsSection/ProductsSection';
import NewsSection from './components/sections/NewSection/NewsSection';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Главная страница со всеми секциями */}
          <Route index element={
            <>
              <div className="div__promo">
                <PromoSection />
                <CardSection />
              </div>
              <PhotoServiceSection />
              <SolutionsSection />
              <ProjectsSection />
              <SpeciesSection />
              <StoriesSection />
              <ProductsSection />
              <NewsSection />
             
            </>
          } />
          
          {/* Страница со всеми карточками */}
          <Route path="cards" element={<CardsPage />} />
      
          {/* Страница 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;