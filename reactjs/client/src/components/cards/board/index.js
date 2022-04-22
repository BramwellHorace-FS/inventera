import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProductionCard from '../production';
import styles from './styles.module.css';

export default function ProductionBoard({ title, items }) {
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
              title={item.name}
              dueDate={item.dueDate}
              itemCount={item.quantity}
              itemUnit={item.itemUnit}
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
      itemUnit: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
