import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function PrimaryButton({ children, onClick }) {
  return (
    <Button
      onClick={onClick}
      variant="primary"
      className="d-flex justify-content-center align-items-center gap-2"
    >
      {children}
    </Button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
