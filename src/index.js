import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Route,Switch } from 'react-router'
import { Provider } from 'react-redux';
import intialGlobalState from './reducers/intialGlobalState';
import Header from './components/header/Header'
import './index.css';
import configureStore from './store';
import indexRoutes from "./routes/index";
import { ConnectedRouter } from 'react-router-redux'

const store = configureStore(intialGlobalState);

ReactDOM.render(
  <Provider store={store}>
    <Header/>
    <ConnectedRouter>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);