import {UPDATE_SOURCE} from './config';

const initialState = {
    source: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SOURCE:
            return { ...state, source: action.payload}
        default:
            return state;
    }
}

export default reducer;