import React from 'react';
import { withRouter } from 'react-router-dom';
import './navigation-card.styles.scss';

const NavigationCard = ({ imageUrl, title, text, history, linkUrl, match }) => (
  <div className="navigation-card" onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <img className="navigation-card-image" src={imageUrl} alt={title} />
    <h2>{title}</h2>
    <div className="navigation-card-text">{text}</div>
    <div className="navigation-card-link">View All</div>
  </div>
);

export default withRouter(NavigationCard);