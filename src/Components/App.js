import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import curso from './curso';

const history = createBrowserHistory();

const App = () => {
    return(
        <Router history={history}>
            <Route exact path="/" component={curso}></Route>
        </Router>
    )
}

export default App;