import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Styles from './button.module.css';

export default function PrimaryButton({ children, onClick }) {
  return (
    <Button onClick={onClick} variant="primary" className={Styles.btnPrimary}>
      {children}
    </Button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
