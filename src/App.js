import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';



const RedWine = () => (
  <div>
    <h1>Red Wine</h1>
  </div>
)

const WhiteWine = () => (
  <div>
    <h1>White Wine</h1>
  </div>
)

const Champagne = () => (
  <div>
    <h1>Champagne</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/red-wine" component={RedWine} />
        <Route path="/white-wine" component={WhiteWine} />
        <Route path="/champagne" component={Champagne} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
