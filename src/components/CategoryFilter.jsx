import React from 'react';
import PropTypes from 'prop-types';

const CATEGORY = [
  'All',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const CategoryFilter = ({ changeFilter }) => (
  // <select onChange={(e) => changeFilter(e.target.value)}>
  <select onChange={changeFilter}>
    {CATEGORY.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
