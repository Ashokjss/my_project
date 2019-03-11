import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './src/common/landingPage';

render(<BrowserRouter>
    <Switch>
    <Redirect exact path='/' to='/landingPage' />
    <Route path='/landingPage' component={LandingPage} />
    </Switch>
</BrowserRouter>, document.getElementById('root'));
{/* ReactDOM.render(<App />, document.getElementById('app')); */}