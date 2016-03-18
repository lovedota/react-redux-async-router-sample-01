import React, {Component} from 'react';
import { combineReducers } from 'redux';

import Spinner from './spinner';
import RootStore from './root-store';
import RootReducer from './root-reducer';

class AsyncElement extends Component {
    constructor(props) {
        super(props);

        this.state = {component: null, data: null};
        
        RootStore.subscribe(() => {
            this.setState({data: RootStore.getState().page})
        });
    }

    componentDidMount() {
        if (!this.state.component) {
            this.bundle(({page, reducer}) => {
                if (reducer) {
                    RootStore.replaceReducer(combineReducers({root: RootReducer, page: reducer}));
                }
                
                this.setState({component: page});
            });
        }
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
