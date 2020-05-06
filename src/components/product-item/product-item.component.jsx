import React from 'react';
import './product-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component'

const ProductItem = ({ imageUrl, price, text }) => (
  <div className="product-item">
    <img className="product-item-image" src={imageUrl} alt="" />
    <div className="product-item-text">{text}</div>
    <div className="product-item-price">{price}</div>
    <CustomButton>Add to Cart</CustomButton>
  </div>
);

export default ProductItem;