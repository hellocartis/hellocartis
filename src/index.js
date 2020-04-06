import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import './index.css';
const welcomeElem = <h1>Welcome to hellocartis</h1>;

ReactDOM.render(
    
    <Router>
        <div>
            <Route exact path='/' component={App} />
        </div>
    </Router>,
    // welcomeElem,
    document.getElementById('root')
);

