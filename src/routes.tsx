import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline, LinearProgress } from '@material-ui/core';
// import LoginPage from './pages/login';
// import MainPage from './pages/main';

const LoginPage = lazy(() => import('./pages/login'));
const MainPage = lazy(() => import('./pages/main'));

function Routes() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route component={MainPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
