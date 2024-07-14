import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import Debugger from './components/Debugger';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/debugger" component={Debugger} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

