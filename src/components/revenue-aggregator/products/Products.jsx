import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product/Product';

const Products = ({ products }) => {

  const content = products.map((item) =>
    <Product key={item.id} {...item}  />
  );

  return (
    <tbody>{content}</tbody>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;