import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from 'components/Home';
import Login from 'components/Login';
import {
  HOME as HOME_URL,
  LOGIN as LOGIN_URL,
} from './constants';

const Routes = (props) => (
  <Switch>
    <Route
      exact
      path={HOME_URL}
      component={props.auth ? Home : Login}
    />
    <Route
      path={LOGIN_URL}
      component={props.auth? Home : Login}
    />
  </Switch>
);

const mapStateToProps = state => {
  return{
    auth: state.auth.auth.loggedIn,
  };
};

export default connect(mapStateToProps, null)(Routes);
