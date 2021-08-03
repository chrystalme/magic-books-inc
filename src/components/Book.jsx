import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <tr>
    <td>{book.ISBN}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button type="button" onClick={() => removeBook(book.ISBN)}>Remove Book</button>
    </td>
  </tr>
);

Book.propTypes = {
  book: {
    ISBN: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
