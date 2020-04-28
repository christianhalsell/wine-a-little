import React from 'react';
import './navigation-cards.styles.scss';

import NavigationCard from '../navigation-card/navigation-card.component';

import RedBottle from './images/redwine-cropped@2x.png';
import WhiteBottle from './images/whitewine-cropped@2x.png';
import ChampagneBottle from './images/champagne-cropped@2x.png';

class NavigationCards extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [
        {
          id: 1,
          imageUrl: 'https://www.christianhalsell.com/images/wine-a-little/redwine-cropped@2x.png',
          linkUrl: '',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisi justo. Pellentesque nec efficitur odio.',
          title: 'Red Wine'
        },
        {
          id: 2,
          imageUrl: 'https://www.christianhalsell.com/images/wine-a-little/whitewine-cropped@2x.png',
          linkUrl: '',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisi justo. Pellentesque nec efficitur odio.',
          title: 'White Wine'
        },
        {
          id: 3,
          imageUrl: 'https://www.christianhalsell.com/images/wine-a-little/champagne-cropped@2x.png',
          linkUrl: '',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisi justo. Pellentesque nec efficitur odio.',
          title: 'Champagne'
        }
      ]
    }
  }

  render() {
    return (
      <div className="navigation-cards">
        {
          this.state.cards.map(({ id, ...otherProps }) => (
            <NavigationCard key={id} {...otherProps} />
          ))
        }
      </div>
    )
  }
}

export default NavigationCards;