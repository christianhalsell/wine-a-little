import React from 'react';
import './product-item.styles.scss';

const ProductItem = ({ imageUrl, price, text }) => (
  <div className="product-item">
    <img className="product-item-image" src={imageUrl} alt="" />
    <div className="product-item-text">{text}</div>
    <div className="product-item-price">{price}</div>
    <button>Add to Cart</button>
  </div>
);

export default ProductItem;