import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <div className="loader-container">
        <div className="loader loader-circle"></div>
        <div className="loader loader-pulse"></div>
        <div className="loader-dot"></div>
        <div className="loader-text">Загрузка</div>
      </div>
    </div>
  );
};

export default Preloader;