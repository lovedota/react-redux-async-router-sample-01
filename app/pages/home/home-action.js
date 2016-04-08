import { dispatch } from '@common';

let HomeAction = {
    increment() {
         dispatch({ type: 'INCREMENT' });
    },
    
    decrement() {
         dispatch({ type: 'DECREMENT' });
    }
};

export default HomeAction;