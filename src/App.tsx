// src/App.tsx
import React from "react";
import Layout from "./components/layout/Layout";
import PromoSection from "./components/sections/PromoSection";
import CardSection from "./components/sections/CardSection";
import PhotoServiceSection from "./components/sections/PhotoServiceSection";
import SolutionsSection from "./components/sections/SolutionsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SpeciesSection from "./components/sections/SpeciesSection";
import StoriesSection from "./components/sections/StoriesSection";
import ProductsSection from "./components/sections/ProductsSection";
import NewsSection from "./components/sections/NewsSection";

const App: React.FC = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default App;