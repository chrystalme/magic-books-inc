import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, changeFilter, filter,
}) => {
  const handleRemoveBook = (ISBN) => {
    removeBook(ISBN);
  };

  const handleFilter = (filter) => {
    changeFilter(filter);
  };
  return (
    <>
      <CategoryFilter changeFilter={handleFilter} />
      <table>
        <thead>
          <tr>
            <td>Book ID</td>
            <td>Title</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {books.filter((book) => (filter === 'All' ? books : book.category === filter)).map((book) => (
            <Book key={book.ISBN} book={book} removeBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => (
  {
    filter: state.filter,
    books: state.Books,
  });

const mapDispatchToProps = (dispatch) => ({
  removeBook: (ISBN) => dispatch(removeBook(ISBN)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default ConnectedComponent;
