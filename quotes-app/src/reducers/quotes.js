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
        case actionTypes.EDIT_QUOTE: {
            const { quote, quoteId } = payload;
            let copy = Object.values(state);
            return copy.map(item => {
                if(item.ID === quoteId) {
                    return {
                        ...item,
                        content: quote
                    }
                }
                return item
            });
        }
        default:
            return state;
    }
}