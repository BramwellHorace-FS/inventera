import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProductionCard from '../production';
import styles from './styles.module.css';

export default function ProductionBoard({ title, items, handleShow }) {
  return (
    <Container className={styles.board}>
      <p>{title}</p>
      <Container
        className={
          items && items.length === 0
            ? `${styles.container}`
            : `${styles.containerFill}`
        }
      >
        {items &&
          items.map((item) => (
            <ProductionCard
              key={item.id}
              handleShow={handleShow}
              title={item.name}
              dueDate={item.dueDate}
              itemCount={item.quantity}
              itemUnit={item.unit ? item.unit.name : 'pcs'}
            />
          ))}
        {items.length === 0 && (
          <Container className="text-center p-5">
            <p>No Items</p>
            <p>Try Adding Some</p>
          </Container>
        )}
      </Container>
    </Container>
  );
}

ProductionBoard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.shape({ name: PropTypes.string.isRequired }),
    }),
  ).isRequired,
  handleShow: PropTypes.func.isRequired,
};
