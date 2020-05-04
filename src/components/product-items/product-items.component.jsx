import React from 'react';
import './product-items.styles.scss';

import ProductItem from '../product-item/product-item.component';

class ProductItems extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          id: 1,
          imageUrl: 'https://www.christianhalsell.com/images/wine-a-little/daou-vineyards-pessimist-red-blend-2017@2x.png',
          linkUrl: '',
          price: '$19.95',
          text: 'Daou Vineyards Pessimist Red Blend'
        },
        {
          id: 2,
          imageUrl: 'https://www.christianhalsell.com/images/wine-a-little/brick-and-mortar-rose-2018@2x.png',
          linkUrl: '',
          price: '$24.95',
          text: 'Brick and Mortar Elegent Rose'
        },
        {
          id: 3,
          imageUrl: 'https://www.christianhalsell.com/images/wine-a-little/jean-marc-bugaud-morgon-les-charmes-2018@2x.png',
          linkUrl: '',
          price: '$22.95',
          text: 'Jean Marc Bugaud Morgon les Charmes 2018'
        },
        {
          id: 4,
          imageUrl: 'https://www.christianhalsell.com/images/wine-a-little/faire-la-fete-cremant-de-limoux-brout-rose@2x.png',
          linkUrl: '',
          price: '$19.95',
          text: 'Faire la Fete Cremant de Limoux Brout Rose'
        }
      ]
    }
  }

  render() {
    return (
      <div className="product-items">
        {
          this.state.items.map(({ id, ...otherProps }) => (
            <ProductItem key={id} {...otherProps} />
          ))
        }
      </div>
    )
  }
}

export default ProductItems;