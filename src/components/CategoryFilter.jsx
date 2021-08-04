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

const CategoryFilter = ({ handleFilter }) => {
  <select onChange={(e) => handleFilter(e.target.value)}>
    {CATEGORY.map((category) => {
      <option key={category} value={category}>
        {category}
      </option>;
    })}
  </select>;
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
