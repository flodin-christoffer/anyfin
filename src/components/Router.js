import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App'
import Country from './countries/Country'

const Router = () => (
  <BrowserRouter>
  <Switch>
    <Route path="/" component={App} exact />
    <Route path="/country/:name" component={Country} />
  </Switch>
  </BrowserRouter>

);

export default Router;