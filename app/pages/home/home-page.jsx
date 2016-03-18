import React, {Component} from 'react';
import { Provider } from 'react-redux';

import HomeReducer from './home-reducer';

import RootStore from '@common/root-store';

class HomePage extends Component {
    constructor(props) {
        super(props);    
        
        this.state = {
            stop: true
        };
        
        this.incrementAuto = this.incrementAuto.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }
    
    onIncrement() {
        RootStore.dispatch({ type: 'INCREMENT' });
    }

    onDecrement() {
        RootStore.dispatch({ type: 'DECREMENT' });
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.onIncrement();
        }
    }
    
    incrementAuto() {
        let stop = !this.state.stop;
        
        if (stop) {
            clearInterval(this.interval);
        } else {
            this.interval = setInterval(this.onIncrement, 500);
        }
        
        this.setState({stop});
    }

    render() {
        const { value } = this.props.data;
        
        return (
            <div className="container">
                <h1>This is Home Page</h1>
                <p>
                    Clicked: {value} times
                    {' '}
                    <button onClick={this.onIncrement}>
                        +
                    </button>
                    {' '}
                    <button onClick={this.onDecrement}>
                        -
                    </button>
                    {' '}
                    <button onClick={this.incrementIfOdd}>
                        Increment if odd
                    </button>
                    {' '}
                    <button onClick={this.incrementAuto}>
                        {this.state.stop ? 'Start' : 'Stop' }
                    </button>
                </p>
            </div>
        );
    }
}

export const page = HomePage;
export const reducer = HomeReducer;