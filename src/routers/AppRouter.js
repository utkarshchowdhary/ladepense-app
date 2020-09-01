import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DepenseDashboardPage from '../components/DepenseDashboardPage';
import AddDepensePage from '../components/AddDepensePage';
import EditDepensePage from '../components/EditDepensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DepenseDashboardPage} />
        <PrivateRoute path="/create" component={AddDepensePage} />
        <PrivateRoute path="/edit/:id" component={EditDepensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
