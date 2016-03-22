import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'jquery';
import 'bootstrap-sass';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router';

import AsyncElement from './common/async-element';
import MasterPage from './master-page';
import RootStore from './common/root-store';

class HomePage extends AsyncElement {
    constructor(props) {
        super(props);

        this.bundle = require('bundle?lazy!@pages/home/home-page');
    }
}

class AboutPage extends AsyncElement {
     constructor(props) {
        super(props);

        this.bundle = require('bundle?lazy!@pages/about/about-page');
    }
}

class ContactPage extends AsyncElement {
     constructor(props) {
        super(props);

        this.bundle = require('bundle?lazy!@pages/contact/contact-page');
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

render((
    <Provider store={RootStore}>
        <Router history={hashHistory}>
            <Route path="/" component={MasterPage}>
                <IndexRoute component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="*" component={NotFoundPage}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('container'));
