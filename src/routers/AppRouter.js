import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DepenseDashboardPage from '../components/DepenseDashboardPage';
import AddDepensePage from '../components/AddDepensePage';
import EditDepensePage from '../components/EditDepensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DepenseDashboardPage} exact={true} />
        <Route path="/create" component={AddDepensePage} />
        <Route path="/edit/:id" component={EditDepensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
