import React from 'react';
import './navigation-cards.styles.scss';

import RedBottle from './images/redwine-cropped@2x.png';
import WhiteBottle from './images/whitewine-cropped@2x.png';
import ChampagneBottle from './images/champagne-cropped@2x.png';

class NavigationCards extends React.Component {
  constructor() {
    super();

    this.state = {
      navigationCards: []
    }
  }

  render() {
    return (
      <div className="navigation-cards">
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
      </div>
    )
  }
}

export default NavigationCards;