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
        <a href="#" className="projects__item-link_2--active__light">
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