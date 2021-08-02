import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = (ISBN) => {
    removeBook(ISBN);
  };
  return (
    <table>
      <thead>
        <tr>
          <td>Book ID</td>
          <td>Title</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book key={book.ISBN} book={book} removeBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({ books: state.Books });

const mapDispatchToProps = (dispatch) => ({
  removeBook: (ISBN) => dispatch(removeBook(ISBN)),
});

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default ConnectedComponent;
