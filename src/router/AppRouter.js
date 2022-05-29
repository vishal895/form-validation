import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from '../components/Details';
import JobForm from '../components/JobForm';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route component={JobForm} path="/" exact={true} />
        <Route component={Details} path="/v1jobs/job" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
