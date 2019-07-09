import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/form/login/LoginForm'
import './index.css';
const routing = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Home} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'))
