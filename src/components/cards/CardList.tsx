import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

interface CardData {
  cardID: string;
  title: string;
  img: string;
  subtitle: string;
  content: string;
  links1: string;
  links2: string;
  links3: string;
}

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null); // Изменено на number
  const isHovered = useRef(false);

  // Локальные резервные данные
  const localCardsData: CardData[] = [
    {
      cardID: "1",
      title: "Light Commercial Buildings",
      img: "public/Rectangle_3.png",
      subtitle: "Strato",
      content: "Light Commercial",
      links1: "Extremely Simple",
      links2: "Compatible with Strato Enterprise",
      links3: "Learn more ->",
    },
    {
      cardID: "2",
      title: "Large Facilities",
      img: "public/Rectangle_4.png",
      subtitle: "Strato",
      content: "Enterprise",
      links1: "Flexible and Powerful Software",
      links2: "Integrates with Strato Light Commercial",
      links3: "Learn more ->",
    },
    {
      cardID: "3",
      title: "Add-on solution available",
      img: "public/Ablaka.png",
      subtitle: "Strato",
      content: "Cloud Services",
      links1: "Alerting and Backup",
      links2: "Energy Efficiency Services",
      links3: "Learn more ->",
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data: CardData[] = await response.json();
        
        const isValidData = Array.isArray(data) && data.length > 0 && 
                            data.every(item => 
                              'cardID' in item && 
                              'title' in item && 
                              'img' in item
                            );
        
        if (!isValidData) {
          throw new Error('Invalid data structure');
        }
        
        setCards(data);
        setError(null);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load data. Using local backup data.');
        setCards(localCardsData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Автопрокрутка слайд-шоу
  useEffect(() => {
    const startAutoScroll = () => {
      if (cards.length <= 1) return;
      
      intervalRef.current = window.setInterval(() => {
        if (!isHovered.current) {
          setCurrentIndex(prev => (prev + 1) % cards.length);
        }
      }, 1000);
    };
    
    startAutoScroll();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [cards.length]);

  // Обновление позиции при изменении текущего индекса
  useEffect(() => {
    if (!containerRef.current || !contentRef.current || cards.length === 0) return;
    
    const container = containerRef.current;
    const content = contentRef.current;
    const card = content.children[currentIndex] as HTMLElement;
    
    if (!card) return;
    
    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;
    const cardLeft = card.offsetLeft;
    
    const scrollPosition = cardLeft - (containerWidth - cardWidth) / 2;
    
    content.style.transition = 'transform 0.5s ease-in-out';
    content.style.transform = `translateX(${-scrollPosition}px)`;
  }, [currentIndex, cards]);

  // Обработка ресайза окна
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !contentRef.current) return;
      
      contentRef.current.style.transition = 'none';
      setCurrentIndex(prev => prev);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Обработчики для паузы при наведении
  const handleMouseEnter = () => {
    isHovered.current = true;
  };
  
  const handleMouseLeave = () => {
    isHovered.current = false;
  };

  if (loading) {
    return (
      <div className="preloader">
        <div className="loader"></div>
        <p>Loading cards data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div 
      className="projects__container" 
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="projects__content" ref={contentRef}>
        {cards.map((card, index) => (
          <Card
            key={card.cardID}
            {...card}
            style={{ 
              animationDelay: `${index * 0.2}s`,
              opacity: index === currentIndex ? 1 : 0.7,
              transform: `scale(${index === currentIndex ? 1.05 : 1})`,
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;