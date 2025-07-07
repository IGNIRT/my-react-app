import React from 'react';

interface CardProps {
  cardID: string;
  title: string;
  img: string;
  subtitle: string;
  content: string;
  links1: string;
  links2: string;
  links3: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  cardID,
  title,
  img,
  subtitle,
  content,
  links1,
  links2,
  links3,
  style
}) => {
  return (
    <article 
      className="projects__light animate-card" 
      data-card-id={cardID}
      style={style}
    >
      <p className="projects__title__light">{title}</p>
      <img 
        className="projects__image" 
        src={img} 
        alt={title} 
        loading="lazy" 
      />
      <p className="projects__subtitle__light">{subtitle}</p>
      <p className="projects__slogan__light">{content}</p>
      <div className="list__link">
        <a href="#" className="projects__item-link--active__light">
          <p>{links1}</p>
        </a>
        <div className="create-line"></div>
        <a href="https://elearning.marsu.ru/mod/jitsi/session.php?avatar=https%3A%2F%2Felearning.marsu.ru%2Fuser%2Fpix.php%2F33367%2Ff1.jpg&nom=%D0%98%D0%B1%D1%80%D0%B0%D0%B3%D0%B8%D0%BC%20%D0%AE%D0%BB%D0%B4%D0%B0%D1%88%D0%B5%D0%B2&ses=frontend-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D0%B9-%D1%81%D1%82%D0%B5%D0%BA-2024-2025.194.%D0%B2%D0%BA%D1%81-%D0%BD%D0%B0-%D0%B4%D0%B5%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8E-%D1%80%D0%B0%D0%B1%D0%BE%D1%82&courseid=11510&cmid=623272&t" className="projects__item-link_2--active__light">
          <p>{links2}</p>
        </a>
        <nav className="projects__nav">
          <a className="projects__item-link" href="#">{links3}</a>
        </nav>
      </div>
    </article>
  );
};

export default Card;