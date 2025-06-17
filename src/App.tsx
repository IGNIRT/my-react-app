// src/App.tsx
import React from 'react';

// Компоненты
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import SolutionsSection from './components/SolutionsSection/SolutionsSection';
import NewsSection from './components/NewsSection/NewsSection';
import Footer from './components/Footer/Footer';
import Message from './components/Message/Message'; // например, для тестовых сообщений

import './App.css';

const App: React.FC = () => {
  const greetingText = "Добро пожаловать в React с Vite и TypeScript!";
  
  return (
    <div className="App">
      <Header />

      <main className="container">
        <HeroSection />
        
        {/* Пример динамического текста */}
        <Message text={greetingText} />

        <SolutionsSection />
        <NewsSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;