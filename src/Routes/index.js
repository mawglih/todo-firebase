import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import TodoItem from 'components/TodoItem';
import {
  HOME as HOME_URL,
  TODO_ITEM as TODO_ITEM_URL,
} from './constants';

export default () => (
  <Switch>
    <Route
      exact
      path={HOME_URL}
      component={Home}
    />
    <Route
      exact
      path={TODO_ITEM_URL}
      component={TodoItem}
    />
  </Switch>
);