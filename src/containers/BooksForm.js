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

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      ISBN: Math.floor(Math.random() * 100000001),
      title: titleInput,
      category: categorySelect,
    });
    setTitleInput('');
    setCategorySelect('');
  };

  return (
    <form className="mx-auto w-4/5 border-solid border-t-2 border-gray-400 mt-8 py-6" onSubmit={handleSubmit}>
      <h2 className="uppercase text-sm font-bold text-gray-400 mb-2">Add new book</h2>
      <div className="flex flex-row justify-between">
        <input className="w-4/6 px-3 text-gray-300 text-sm font-light rounded-sm" type="text" name="title" placeholder="Enter Book Title" value={titleInput} onChange={handleChange} />
        <select className="text-gray-300 text-sm font-light rounded-sm w-1/6" name="category" id="category" value={categorySelect} onChange={handleChange}>
          <option value="">Category</option>
          {CATEGORY.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button className="btn" type="submit">Add Book</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBook(book)),
});

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const ConnectedComponent = connect(null, mapDispatchToProps)(BooksForm);

export default ConnectedComponent;
