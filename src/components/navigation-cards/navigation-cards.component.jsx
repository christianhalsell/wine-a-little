import React from 'react';
import './navigation-cards.styles.scss';

import NavigationCard from '../navigation-card/navigation-card.component';

class NavigationCards extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [
        {
          id: 1,
          imageUrl: 'https://www.christianhalsell.com/images/wine-a-little/redwine-cropped@2x.png',
          linkUrl: 'red-wine',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisi justo. Pellentesque nec efficitur odio.',
          title: 'Red Wine'
        },
        {
          id: 2,
          imageUrl: 'https://www.christianhalsell.com/images/wine-a-little/whitewine-cropped@2x.png',
          linkUrl: 'white-wine',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nisi justo. Pellentesque nec efficitur odio.',
          title: 'White Wine'
        },
        {
          id: 3,
          imageUrl: 'https://www.christianhalsell.com/images/wine-a-little/champagne-cropped@2x.png',
          linkUrl: 'champagne',
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