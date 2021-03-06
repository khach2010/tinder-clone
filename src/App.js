import React from 'react';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header.js';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Switch>
          <Route path='/chat'>
            <h1>i Am a CHAT</h1>
          </Route>
          <Route path='/'>
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
