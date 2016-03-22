import React, {Component} from 'react';
import { combineReducers } from 'redux';

import Spinner from './spinner';
import RootStore from './root-store';
import RootReducer from './root-reducer';

class AsyncElement extends Component {
    constructor(props) {
        super(props);

        this.state = {component: null, data: null};
        
        this.subscribe = RootStore.subscribe(() => {
            this.setState({data: RootStore.getState()})
        });
    }

    componentDidMount() {
        if (!this.state.component) {
            this.bundle(({page, reducer}) => {
                if (reducer) {
                    RootStore.replaceReducer(reducer);
                }
                
                this.setState({component: page});
            });
        }
    }
    
    componentWillUnmount() {
        this.subscribe(); //unsuscribe event
    }

    render() {
        const Component = this.state.component;

        if (Component) {
            return <Component {...this.props} data={this.state.data}/>;
        }

        return <Spinner />;
    }
}


export default AsyncElement;
