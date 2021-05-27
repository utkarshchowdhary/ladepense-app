import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DepenseDashboardPage from '../components/DepenseDashboardPage';
import AddDepensePage from '../components/AddDepensePage';
import EditDepensePage from '../components/EditDepensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DepenseDashboardPage} />
        <PrivateRoute path="/create" component={AddDepensePage} />
        <PrivateRoute path="/edit/:id" component={EditDepensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
