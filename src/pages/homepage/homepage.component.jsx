import React from 'react';
import './homepage.styles.scss';

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
          left
        </div>
        <div className="homepage-callout">
          center
        </div>
        <div className="homepage-callout">
          right
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