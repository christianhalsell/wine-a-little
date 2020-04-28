import React from 'react';
import './navigation-card.styles.scss';

const NavigationCard = ({ imageUrl, title, text }) => (
  <div className="navigation-card">
    <img className="navigation-card-image" src={imageUrl} alt={title} />
    <h2>{title}</h2>
    <div className="navigation-card-text">{text}</div>
    <div className="navigation-card-link">View All</div>
  </div>
);

export default NavigationCard;