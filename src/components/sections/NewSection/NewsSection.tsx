import React from 'react';

const NewsSection: React.FC = () => {
  return (
    <section className="section__news" id="news">
      <div className="news__content">
        <div className="news__card-1-2-3">
          <article className="news__user-col">
            <p className="news__title">Новости</p>
            <p className="news__subtitle">15 октября 2020 г.</p>
            <q className="news__lead">Добро пожаловать, Келле!</q>
            <a href="#" className="news__item-link--active">linkedin.com/posts/michel-l…</a>
          </article>
          <article className="news__product-news">
            <p className="news__text">30 июня 2020 г.</p>
            <q className="news__subtitle">
              Новый продукт!</q>
            <a href="#" className="news__item-link--active">linkedin.com/posts/michel-l…</a>
          </article>
          <div className="news__doc">
            <div className="doc__content">
              <p className="news__title--doc">
                Документация</p>
              <img src="img/Document.png" className="news__img" alt="Document" />
              <ul className="news__ul">
                <li>
                  <a href="#" className="news__item-link--documentation">
                    Документация -&gt;</a>
                </li>
              </ul>
              <div className="doc__line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;