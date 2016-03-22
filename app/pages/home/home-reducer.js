import { ActionTypes } from 'redux';

let initialState = {
    value: 0
};

function reducer(state, action) {
    switch (action.type) {
        case '@@redux/INIT': 
            return initialState;
        case 'INCREMENT':
            state.value += 1;
            return state;
        case 'DECREMENT':
            state.value -= 1;
            return state;
        default:
            return state;
    }
}

export default reducer;