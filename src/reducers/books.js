import * as actions from '../actions';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case actions.CREATE_BOOK:
      return [...state, action.payload];
    case actions.REMOVE_BOOK:
      return state.filter((book) => book.ISBN !== action.payload);

    default:
      return state;
  }
};

export default booksReducer;
