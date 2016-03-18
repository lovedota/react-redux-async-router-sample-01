import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
//import 'bootstrap-sass';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import AsyncElement from './common/async-element';
import MasterPage from './master-page';
import RootStore from './common/root-store';

class HomePage extends AsyncElement {
    constructor(props) {
        super(props);

        this.bundle = require('bundle?lazy!@pages/home/home-page');
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About</h2>
            </div>
        );
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h2>Contact</h2>
            </div>
        );
    }
}

class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                404 Not Found
            </div>
        );
    }
}

class NotFoundPage1 extends React.Component {
    render() {
        return (
            <div>
                404 Not Found
            </div>
        );
    }
}

render((
    <Provider store={RootStore}>
        <Router history={browserHistory}>
            <Route path="/" component={MasterPage}>
                <IndexRoute component={HomePage}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="*" component={NotFoundPage}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('container'));
