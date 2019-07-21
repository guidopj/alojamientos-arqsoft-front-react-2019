import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import intialGlobalState from './reducers/intialGlobalState';
import Header from './components/header/Header'
import './index.css';
import configureStore from './store';
import indexRoutes from "./routes/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

const store = configureStore(intialGlobalState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header/>
        {indexRoutes.map((prop, key) => {
          return <Route exact path={prop.path} component={prop.component} key={key} />;
        })}
    </Router>
  </Provider>,
  document.getElementById('root')
);