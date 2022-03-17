import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, onClick, className }) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
