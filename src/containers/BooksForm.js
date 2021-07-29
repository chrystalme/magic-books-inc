import React from 'react';

const CATEGORY = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => (
  <form>
    <h2>Add book form</h2>
    <input type="text" placeholder="Enter Book Title" />
    <select name="category" id="category">
      <option value="">Select a category</option>
      {CATEGORY.map((category) => (
        <option key={Math.floor(Math.random() * CATEGORY.length)} value={category}>
          {category}
        </option>
      ))}
    </select>
    <input type="button" value="submit" />
  </form>
);

export default BooksForm;
