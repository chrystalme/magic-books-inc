import { combineReducers } from 'redux';
import booksReducer from './books';
import changeReducer from './filter';

const rootReducer = combineReducers({
  Books: booksReducer,
  filter: changeReducer,
});

export default rootReducer;
