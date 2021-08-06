import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <>
    <div className="mt-3 p-3 mx-auto w-4/5 container align-middle bg-white flex md:flex-row sm:flex-col justify-between items-center">
      <div className="pl-3">
        <h5 className="text-gray-400 text-sm font-medium">{book.category}</h5>
        <h3 className="font-bold text-xl">{book.title}</h3>
        <h5 className="text-blue-500 text-sm font-light">{book.ISBN}</h5>
        <div className="divide-x divide-gray-400">
          <a className="link" href="/">Comments</a>
          <a
            className="link "
            value="Remove"
            onClick={() => removeBook(book.ISBN)}
            href="/"
          >
            Remove
          </a>
          <a className="link" href="/">Edit</a>
        </div>
      </div>
      <div className="flex md:flex-row items-center sm:flex-col gap-4">
        <div className=" flex flex-row gap-2 pr-4 border-r-2 border-solid border-gray-400">
          <div>
            <svg id="svg" width="50" height="50" viewBox="0 0 141 141">
              <path
                id="light"
                d="M70,70 v-70 a70,70 0 0,1 0,140 a70,70 0 1,1 0,-140"
                fill="gray"
              />
              <path id="dark" d="M70,70 v-70 a70,70 0 0,1 0,0" fill="blue" />
              <path
                d="M20,70 a50,50 0 0,1 100,0 a50,50 0 0,1 -100,0"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <span className="font-normal text-3xl" id="perc">
              64%
            </span>
            <h5 className="text-gray-300 text-sm font-light">Completed</h5>
          </div>
        </div>
        <div>
          <h5 className="font-light text-sm text-gray-300">
            Current Chapter
          </h5>
          <p className="text-sm">Chapter 17</p>
          <button className="btn" type="button">Update Progress</button>
        </div>
      </div>
    </div>
  </>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
