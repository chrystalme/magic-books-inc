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
  <select className="nav-item appearance-none cursor-pointer" onChange={changeFilter}>
    <option value="All">Categories</option>
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
