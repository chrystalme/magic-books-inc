import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, changeFilter, filter,
}) => {
  const handleRemoveBook = (ISBN) => {
    removeBook(ISBN);
  };

  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };

  return (
    <>
      <CategoryFilter handleFilter={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <td>Book ID</td>
            <td>Title</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {books.filter((book) => (filter === 'All' ? books : book.category === filter))
            .map((book) => (
              <Book key={book.ISBN} book={book} removeBook={handleRemoveBook} />
            ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => ({
  books: state.Books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (ISBN) => dispatch(removeBook(ISBN)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(BooksList);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default ConnectedComponent;
