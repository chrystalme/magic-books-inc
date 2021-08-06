import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="mx-auto bg-gray-50 shadow-lg">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
