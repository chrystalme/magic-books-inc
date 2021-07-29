import { combineReducers } from 'redux';
import booksReducer from './books';

const rootReducer = combineReducers({
  Books: booksReducer,
});

export default rootReducer;
