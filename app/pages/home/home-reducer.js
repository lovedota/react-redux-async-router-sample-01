function reducer(state = {value: 0}, action) {
  switch (action.type) {
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