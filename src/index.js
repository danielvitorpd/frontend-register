import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/login.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth from './Auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <Route path="/login">
        <Auth/>
      </Route>
      <Route path="/">
        <App/>
      </Route>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
