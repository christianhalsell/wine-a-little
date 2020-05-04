import React from 'react';

import Banner from '../../components/banner/banner.component';
import HomepageContent from '../../components/homepage-content/homepage-content.component';

const HomePage = () => (
  <div className="homepage">
    <Banner bannerNumber="1" />
    <HomepageContent />
  </div>
)

export default HomePage;