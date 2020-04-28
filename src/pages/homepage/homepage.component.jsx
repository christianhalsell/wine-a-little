import React from 'react';
import './homepage.styles.scss';

import Banner from '../../components/banner/banner.component';
import HomepageContent from '../../components/homepage-content/homepage-content.component';

const HomePage = () => (
  <div className="homepage">
    <Banner />
    <HomepageContent />
  </div>
)

export default HomePage;