import React, { ReactNode, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer'; // Добавлен импорт Footer
import Preloader from './Preloader';
import Modal from '../ui/Modal';

interface LayoutProps {
  children: ReactNode;
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
        {children}
      </main>
      <Footer /> {/* Добавлен компонент Footer */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Layout;