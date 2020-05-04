import React from 'react';
import SHOP_DATA from './shop.data';

import Banner from '../../components/banner/banner.component';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      inventory: SHOP_DATA
    }
  }

  render() {
    const { inventory } = this.state;

    return (
      <div>
        <Banner bannerNumber="2" />
        {
          inventory.map((item) => (
            <div>
              <div key={item.id}>{item.title}</div>
              <ul>
                {
                  item.items.map((wine) => (
                    <li key={wine.id}>{wine.text} ({wine.price})</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    );
  }
}

export default ShopPage;