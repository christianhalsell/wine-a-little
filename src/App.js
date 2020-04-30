import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

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
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/red-wine" component={RedWine} />
        <Route path="/white-wine" component={WhiteWine} />
        <Route path="/champagne" component={Champagne} />
      </Switch>
    </div>
  );
}

export default App;
