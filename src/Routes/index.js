import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from 'components/Home';
import Login from 'components/Login';
import Deleted from 'components/Deleted';
import SignUp from 'components/Signup';
import {
  HOME as HOME_URL,
  LOGIN as LOGIN_URL,
  DELETED as DELETED_URL,
  SIGNUP as SIGNUP_URL,
} from './constants';

const Routes = ({
  auth,
}) => (
  <Switch>
    <Route
      path={DELETED_URL}
      exact
      component={Deleted}
    />
    <Route
      path={LOGIN_URL}
      exact
      component={Login}
    />
    <Route
      path={SIGNUP_URL}
      exact
      component={SignUp}
    />
    <Route
      exact
      path={HOME_URL}
      component={Home}
    />
  </Switch>  
);


export default Routes;