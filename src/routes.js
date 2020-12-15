import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ShowsPage from './pages/ShowsPage';
import RegisterForm from './pages/RegisterForm';
import PageNotFound from './pages/PageNotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/shows" component={ShowsPage} />
      <Route path="/contato" component={RegisterForm} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
