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
          text: 'Ranging in style from light and full of finesse to bold and structured, red wine is produced in almost every wine region of the world.',
          title: 'Red Wine'
        },
        {
          id: 2,
          imageUrl: 'https://www.christianhalsell.com/images/wine-a-little/whitewine-cropped@2x.png',
          linkUrl: 'white-wine',
          text: 'White wine styles range from a simple and refreshing aperitif to a robust accompaniment to a hearty meal.',
          title: 'White Wine'
        },
        {
          id: 3,
          imageUrl: 'https://www.christianhalsell.com/images/wine-a-little/champagne-cropped@2x.png',
          linkUrl: 'champagne',
          text: 'Beloved for its lively bubbles, sparkling wine is the ultimate beverage for any festivity, whether it\'s a major celebration or merrymaking! ',
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