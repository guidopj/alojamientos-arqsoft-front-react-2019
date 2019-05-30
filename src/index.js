import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route} from 'react-router-dom'
import Home from './components/home/Home'
import './index.css';
const routing = (
  <Router>
    <div>
      <Route path="/" component={Home} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
