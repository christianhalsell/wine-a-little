import React from 'react';
import './homepage-content.styles.scss';

import NavigationCards from '../navigation-cards/navigation-cards.component';

// TODO: move these images so I don't have to import them
import DealA from './images/daou-vineyards-pessimist-red-blend-2017@2x.png';
import DealB from './images/brick-and-mortar-rose-2018@2x.png';
import DealC from './images/jean-marc-bugaud-morgon-les-charmes-2018@2x.png';
import DealD from './images/faire-la-fete-cremant-de-limoux-brout-rose@2x.png'

const HomepageContent = () => (
  <div className="homepage-content">
    <NavigationCards />
    {/* <div className="navigation-cards">
      <div className="navigation-card">
        <img className="navigation-card-image" src={RedBottle} alt="red wine bottle" />
        <h2>Red Wine</h2>
        <div className="navigation-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent a nisi justo. Pellentesque nec efficitur odio.</div>
        <div className="navigation-card-link">View All</div>
      </div>

      <div className="navigation-card">
        <img className="navigation-card-image" src={WhiteBottle} alt="white wine bottle" />
        <h2>White Wine</h2>
        <div className="navigation-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent a nisi justo. Pellentesque nec efficitur odio.</div>
        <div className="navigation-card-link">View All</div>
      </div>

      <div className="navigation-card">
        <img className="navigation-card-image" src={ChampagneBottle} alt="champagne bottle" />
        <h2>Champagne</h2>
        <div className="navigation-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent a nisi justo. Pellentesque nec efficitur odio.</div>
        <div className="navigation-card-link">View All</div>
      </div>
    </div> */}

    <div className="homepage-deals">
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
  </div>
);

export default HomepageContent;