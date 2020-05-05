import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data';

import Banner from '../../components/banner/banner.component';
import ProductItem from '../../components/product-item/product-item.component';

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
        <div className="shop-content">
          <div className="shop-content-center">
            {
              inventory.map(({ id, title, items }) => (
                <div>
                  <h2 key={id}>{title}</h2>
                  <div className="product-items">
                    {
                      items
                        .filter((item, idx) => idx < 4)
                        .map(({ id, ...wine }) => (
                          <ProductItem key={id} {...wine} />
                        ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ShopPage;