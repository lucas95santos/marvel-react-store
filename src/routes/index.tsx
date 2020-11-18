import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
// pages
import { Home } from '../pages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
