import React from 'react';
import './product-items.styles.scss';

import DealA from './images/daou-vineyards-pessimist-red-blend-2017@2x.png';
import DealB from './images/brick-and-mortar-rose-2018@2x.png';
import DealC from './images/jean-marc-bugaud-morgon-les-charmes-2018@2x.png';
import DealD from './images/faire-la-fete-cremant-de-limoux-brout-rose@2x.png'

class ProductItems extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="product-items">
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
      </div>
    )
  }
}

export default ProductItems;