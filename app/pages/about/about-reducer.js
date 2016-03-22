let initialState = {
    recentlyCancelDate: null,
    recentlyOpenDate: null
};

function reducer(state, action) {
    switch (action.type) {
        case '@@redux/INIT':
            return initialState;
        case 'about/modal/open':
            state.recentlyOpenDate = new Date();
            return state;
        case 'about/modal/close':
            state.recentlyCancelDate = new Date();
            return state;
        default:
            return state;
    }
}

export default reducer;