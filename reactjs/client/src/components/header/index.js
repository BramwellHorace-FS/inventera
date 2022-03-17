import React from 'react';
import PropTypes from 'prop-types';
import Styles from './header.module.css';

export default function Header({ children }) {
  return <header className={Styles.header}>{children}</header>;
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
