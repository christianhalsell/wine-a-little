import React from 'react';
import './banner.styles.scss';

const Banner = ({ bannerNumber }) => {
  return (
    <div className={`banner banner${bannerNumber}`}></div>
  )
};

export default Banner;