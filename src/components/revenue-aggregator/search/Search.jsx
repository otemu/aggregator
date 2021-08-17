import React from 'react';
import PropTypes from 'prop-types';

const Search = ({handleChange}) => {

  return (
	<div className="search">
	  <label className="search__label">Search Products</label>
	  <input className="search__input" type="text" onChange={handleChange} placeholder="Wowcher"/>
	</div>
  )
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default Search;