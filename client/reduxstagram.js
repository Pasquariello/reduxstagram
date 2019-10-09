// let's go!
import React from 'react';

import { render } from 'react-dom';

//import CSS - handled by webpack 
import css from './styles/style.styl';

//import components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

//Imprt React Router Dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route> */}

        </Route>

    </Router>
)

render(router, document.getElementById('root'));