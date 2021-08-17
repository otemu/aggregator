import React from 'react';
import PropTypes from 'prop-types';
import formatNumber from '../helpers/helpers';

const Product = ({ name, unitPrice, sold }) => {
  
  return (
    <tr key={name}>
      <td>{name}</td>
      <td>£{formatNumber(unitPrice * sold)}</td>
    </tr>
  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  unitPrice: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired
};

export default Product;