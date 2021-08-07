import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, handleFilterChange, filter,
}) => {
  const handleRemoveBook = (ISBN) => {
    removeBook(ISBN);
  };

  return (
    <>
      <nav className="container mx-auto">
        <div className="bg-white flex justify-between align-middle items-center lg:px-32 py-4">
          <div className="content-center">
            <span className="text-2xl text-blue-600 logo">Bookstore CMS</span>

            <a className="nav-item px-8" href="/">
              Books
            </a>
            <CategoryFilter changeFilter={handleFilterChange} />
          </div>
          <div className="border-solid border-2 border-gray-300 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-blue-600 m-1 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                strokeWidth="2"
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </nav>
      <div className="mt-12">
        {books
          .filter((book) => (filter === 'All' ? books : book.category === filter))
          .map((book) => (
            <Book key={book.ISBN} book={book} removeBook={handleRemoveBook} />
          ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  books: state.Books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (ISBN) => dispatch(removeBook(ISBN)),
  handleFilterChange: (filter) => dispatch(changeFilter(filter.target.value)),
});

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);
BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default ConnectedComponent;
