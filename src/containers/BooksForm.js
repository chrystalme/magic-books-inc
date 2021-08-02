import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../actions';

const CATEGORY = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = ({ addBook }) => {
  const [titleInput, setTitleInput] = useState('');
  const [categorySelect, setCategorySelect] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitleInput(e.target.value);
    } else {
      setCategorySelect(e.target.value);
    }
  };
  return (
    <form>
      <h2>Add book form</h2>
      <input type="text" name="title" placeholder="Enter Book Title" value={titleInput} onChange={handleChange} />
      <select name="category" id="category" value={categorySelect} onChange={handleChange}>
        <option value="">Select a category</option>
        {CATEGORY.map((category) => (
          <option key={Math.floor(Math.random() * CATEGORY.length * 10)} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input type="button" value="submit" />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  adbook: (book) => dispatch(addBook(book)),
});

const ConnectedComponent = connect(null, mapDispatchToProps)(BooksForm);
export default ConnectedComponent;
