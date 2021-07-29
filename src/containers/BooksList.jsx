import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import PropTypes from 'prop-types';

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
      {books.map(book => (
        <Book key={book.ISBN} book={book} />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = state => ({ books: state.Books });

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).required,
};
export default connect(mapStateToProps)(BooksList);