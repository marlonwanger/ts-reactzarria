import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import MainPage from './pages/main';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
