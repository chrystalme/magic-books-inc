import React from 'react'

const CATEGORY = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  
  const BooksForm = () => {
    return (
      <form>
        <h2>Add book form</h2>
        <input type='text' placeholder='Enter Book Title' />
        <select name='category' id='category'>
          <option value=''>Select a category</option>
          {CATEGORY.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input type='button' value='submit' />
      </form>
    );
  };
  
  export default BooksForm;