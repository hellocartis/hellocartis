import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import Aboutme from './Aboutme';
import Personal from './Personal';
import Hcwraps from './Hcwraps';
const welcomeElem = <h1>Welcome to hellocartis</h1>;

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/aboutme' component={Aboutme} />
            <Route path='/personal' component={Personal} />
            <Route path='/hcwraps' component={Hcwraps} />
        </div>
    </Router>,
    // welcomeElem,
    document.getElementById('root')
);

