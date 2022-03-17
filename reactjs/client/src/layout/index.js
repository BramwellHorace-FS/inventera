import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/sidebar';
import Styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={Styles.layout}>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
