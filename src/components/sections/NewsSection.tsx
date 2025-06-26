import React from 'react';

const NewsSection: React.FC = () => {
  return (
    <section className="section__news" id="news">
      <div className="news__content">
        <div className="news__card-1-2-3">
          <article className="news__user-col">
            <p className="news__title">News</p>
            <p className="news__subtitle">October 15, 2020</p>
            <q className="news__lead">Welcome Kelle!</q>
            <a href="#" className="news__item-link--active">linkedin.com/posts/michel-l…</a>
          </article>
          <article className="news__product-news">
            <p className="news__text">June 30, 2020</p>
            <q className="news__subtitle">New product!</q>
            <a href="#" className="news__item-link--active">linkedin.com/posts/michel-l…</a>
          </article>
          <div className="news__doc">
            <div className="doc__content">
              <p className="news__title--doc">Documentation</p>
              <img src="public/Document.png" className="news__img" alt="Document" />
              <ul className="news__ul">
                <li>
                  <a href="#" className="news__item-link--documentation">Documentation -&gt;</a>
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