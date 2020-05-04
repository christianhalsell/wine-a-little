import React from 'react';
import './homepage-content.styles.scss';

import NavigationCards from '../navigation-cards/navigation-cards.component';
import ProductItems from '../product-items/product-items.component';


const HomepageContent = () => (
  <div className="homepage-content">
    <NavigationCards />
    <ProductItems />
  </div>
);

export default HomepageContent;