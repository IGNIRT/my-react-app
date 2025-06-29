// src/components/layout/Layout.tsx
import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react'; 
import { Outlet } from 'react-router-dom'; // Добавляем Outlet
import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';
import Modal from '../ui/Modal';

interface LayoutProps {
  children?: ReactNode; // Делаем children необязательными
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="body__container">
      {isLoading && <Preloader />}
      <Header openModal={() => setIsModalOpen(true)} />
      <main className="container" id="main">
        {/* Используем Outlet для вложенных маршрутов */}
        {children || <Outlet />}
      </main>
      <Footer />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Layout;