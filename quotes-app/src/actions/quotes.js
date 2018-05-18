import { bindActionCreators } from 'redux';
import Action from './action';
import store from './../reducers/index';
import * as actionTypes from './actionTypes';

export default bindActionCreators({
    fetchQuotes: (quotes) => Action(actionTypes.FETCH_QUOTES, quotes),
    deleteQuote: (quote) => Action(actionTypes.DELETE_QUOTE, quote),
    editQuote: (quote, quoteId) => Action(actionTypes.EDIT_QUOTE, { quote, quoteId })
}, store.dispatch);
