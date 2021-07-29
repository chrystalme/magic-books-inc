export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = book => {
  return {
    type: CREATE_BOOK,
    payload: book,
  };
};

export const removeBook = book => {
  return {
    type: REMOVE_BOOK,
    payload: book.index,
  };
};