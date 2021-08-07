import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../index.css';

const Book = ({ book, removeBook }) => {
  const percentage = Math.floor(Math.random() * 100);
  return (
    <>
      <div className="mt-3 border-solid border border-gray-100 p-3 mx-auto w-4/5 container align-middle bg-white flex md:flex-row sm:flex-col justify-between items-center">
        <div className="pl-3">
          <h5 className="text-gray-400 text-sm font-medium">{book.category}</h5>
          <h3 className="font-bold text-xl">{book.title}</h3>
          <h5 className="text-blue-500 text-sm font-light c-light-blue">{book.ISBN}</h5>
          <div className="divide-x divide-gray-400 margin-top">
            <a className="link c-light-blue" href="/">Comments</a>
            <a
              className="link c-light-blue"
              value="Remove"
              onClick={() => removeBook(book.ISBN)}
              href="/"
            >
              Remove
            </a>
            <a className="link c-light-blue" href="/">Edit</a>
          </div>
        </div>
        <div className="flex md:flex-row items-center sm:flex-col gap-14">
          <div className=" flex flex-row gap-2 pr-16 border-r-2 border-solid border-gray-100">
            <div className="w-12">
              <CircularProgressbar value={percentage} />
            </div>
            <div>
              <span className="font-normal text-3xl">
                {percentage}
                %
              </span>
              <h5 className="text-gray-300 text-sm font-light">Completed</h5>
            </div>
          </div>
          <div className="margin-right">
            <h5 className="font-light text-sm text-gray-300">
              Current Chapter
            </h5>
            <p className="text-sm">Chapter 17</p>
            <button className="btn margin-top" type="button">Update Progress</button>
          </div>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
