import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './navigation.module.css';

export default function index() {
  return (
    <nav className={Styles.nav}>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/materials">Materials</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/productions">Productions</NavLink>
      <NavLink to="/formulas">Formulas</NavLink>
    </nav>
  );
}
