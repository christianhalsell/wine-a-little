import React from 'react';
import './homepage.styles.scss';

import RedBottle from './images/redwine-cropped@2x.png';
import WhiteBottle from './images/whitewine-cropped@2x.png';
import ChampagneBottle from './images/champagne-cropped@2x.png';

// TODO: move these images so I don't have to import them
import DealA from './images/daou-vineyards-pessimist-red-blend-2017@2x.png';
import DealB from './images/brick-and-mortar-rose-2018@2x.png';
import DealC from './images/jean-marc-bugaud-morgon-les-charmes-2018@2x.png';
import DealD from './images/faire-la-fete-cremant-de-limoux-brout-rose@2x.png'

const HomePage = () => (
  <div className="homepage">
    <div className="banner">
      <div className="banner-content">
        <div className="logo">
          Logo
        </div>

        <nav className="navigation">
          Shop
          Contact
          Sign In
        </nav>
      </div>
    </div>

    <div className="homepage-content">
      <div className="homepage-callouts">
        <div className="homepage-callout">
          <img className="callout-image" src={RedBottle} alt="red wine bottle" />
          <h2>Red Wine</h2>
          <div className="callout-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent a nisi justo. Pellentesque nec efficitur odio.</div>
          <div className="callout-link">View All</div>
        </div>

        <div className="homepage-callout">
          <img className="callout-image" src={WhiteBottle} alt="white wine bottle" />
          <h2>White Wine</h2>
          <div className="callout-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent a nisi justo. Pellentesque nec efficitur odio.</div>
          <div className="callout-link">View All</div>
        </div>

        <div className="homepage-callout">
          <img className="callout-image" src={ChampagneBottle} alt="champagne bottle" />
          <h2>Champagne</h2>
          <div className="callout-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent a nisi justo. Pellentesque nec efficitur odio.</div>
          <div className="callout-link">View All</div>
        </div>
      </div>

      <div className="homepage-deals">
        <div className="homepage-deal">
          <img className="deal-image" src={DealA} alt="" />
          <div className="deal-text">Daou Vineyards Pessimist Red Blend</div>
          <div className="deal-price">$19.95</div>
          <button>Add to Cart</button>
        </div>

        <div className="homepage-deal">
          <img className="deal-image" src={DealB} alt="" />
          <div className="deal-text">Brick and Mortar <br />Rose</div>
          <div className="deal-price">$24.95</div>
          <button>Add to Cart</button>
        </div>

        <div className="homepage-deal">
          <img className="deal-image" src={DealC} alt="" />
          <div className="deal-text">Jean Marc Bugaud Morgon les Charmes 2018</div>
          <div className="deal-price">$22.95</div>
          <button>Add to Cart</button>
        </div>

        <div className="homepage-deal">
          <img className="deal-image" src={DealD} alt="" />
          <div className="deal-text">Faire la Fete Cremant de Limoux Brout Rose</div>
          <div className="deal-price">$29.95</div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
)

export default HomePage;