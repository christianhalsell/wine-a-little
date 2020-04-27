import React from 'react';
import './homepage.styles.scss';

import RedBottle from './images/redwine-cropped@2x.png';
import WhiteBottle from './images/whitewine-cropped@2x.png';
import ChampagneBottle from './images/champagne-cropped@2x.png';

const HomePage = () => (
  <div className="homepage">
    <div className="banner">
      <div className="banner-content">
        <div className="logo">
          Logo
        </div>

        <nav className="navigation">
          Nav
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
          A
        </div>
        <div className="homepage-deal">
          B
        </div>
        <div className="homepage-deal">
          C
        </div>
        <div className="homepage-deal">
          D
        </div>
      </div>
    </div>

    <footer className="footer">
      <div className="footer-content">
        footer
      </div>
    </footer>
  </div>
)

export default HomePage;