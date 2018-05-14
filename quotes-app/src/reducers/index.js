import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import quotes from './quotes';

const store = createStore(quotes, applyMiddleware(logger));

export default store;