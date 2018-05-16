import * as actionTypes from './../actions/actionTypes';

const initial = {}

export { initial };

export default (state = initial, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.FETCH_QUOTES: {
            if (state) {
                return { ...state, ...payload }
            }
            return { ...payload }
        }
        case actionTypes.DELETE_QUOTE: {
            let copy = Object.values(state);
            let newState = copy.filter(i => i.ID !== payload)
            return newState;
        }
        default:
            return state;
    }
}