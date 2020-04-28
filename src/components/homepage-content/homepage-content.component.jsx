import React from 'react';
import './homepage-content.styles.scss';

import NavigationCards from '../navigation-cards/navigation-cards.component';
import ProductItems from '../product-items/product-items.component';

// TODO: move these images so I don't have to import them


const HomepageContent = () => (
  <div className="homepage-content">
    <NavigationCards />
    <ProductItems />
    {/* <div className="product-items">
      <div className="product-item">
        <img className="product-item-image" src={DealA} alt="" />
        <div className="product-item-text">Daou Vineyards Pessimist Red Blend</div>
        <div className="product-item-price">$19.95</div>
        <button>Add to Cart</button>
      </div>

      <div className="product-item">
        <img className="product-item-image" src={DealB} alt="" />
        <div className="product-item-text">Brick and Mortar <br />Rose</div>
        <div className="product-item-price">$24.95</div>
        <button>Add to Cart</button>
      </div>

      <div className="product-item">
        <img className="product-item-image" src={DealC} alt="" />
        <div className="product-item-text">Jean Marc Bugaud Morgon les Charmes 2018</div>
        <div className="product-item-price">$22.95</div>
        <button>Add to Cart</button>
      </div>

      <div className="product-item">
        <img className="product-item-image" src={DealD} alt="" />
        <div className="product-item-text">Faire la Fete Cremant de Limoux Brout Rose</div>
        <div className="product-item-price">$29.95</div>
        <button>Add to Cart</button>
      </div>
    </div> */}
  </div>
);

export default HomepageContent;