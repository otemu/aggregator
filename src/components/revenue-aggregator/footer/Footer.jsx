import React from 'react';
import PropTypes from 'prop-types';
import formatNumber from '../helpers/helpers';

const Footer = ({total, label}) => {

  return (
    <tfoot>
      <tr>
        <td>{label}</td>
        <td>{formatNumber(total)}</td>
      </tr>
    </tfoot>
  )
}

Footer.propTypes = {
  total: PropTypes.number,
  label: PropTypes.string
};

Footer.defaultProps = {
  total: 0,
  label: 'Total'
};

export default Footer;