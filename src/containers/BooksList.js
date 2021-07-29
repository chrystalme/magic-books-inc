import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
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
        <Book key={book.ISBN} book={book} />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = (state) => ({ books: state.Books });

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};
export default connect(mapStateToProps)(BooksList);
