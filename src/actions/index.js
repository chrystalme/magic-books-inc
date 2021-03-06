export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const addBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = (ISBN) => ({
  type: REMOVE_BOOK,
  payload: ISBN,
});

export const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  payload: category,
});
