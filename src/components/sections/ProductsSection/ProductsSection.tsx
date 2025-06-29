import React from 'react';

const ProductsSection: React.FC = () => {
  return (
    <section className="section__products" id="products">
      <div className="products__content">
        <div className="product__text">
          <p className="products__title">For each solution, its range of products</p>
          <a href="#" className="products__item-link--products-list">Products list →</a>
          <div className="product__line"></div>
        </div>
        <img src="public/System_Block.png" alt="System block" className="products__img" />
      </div>
    </section>
  );
};

export default ProductsSection;