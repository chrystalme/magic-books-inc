import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
  book: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const ConnectedComponent = connect()(Book);

export default ConnectedComponent;
