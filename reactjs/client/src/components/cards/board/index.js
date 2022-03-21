import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProductionCard from '../production';
import styles from './styles.module.css';

export default function ProductionBoard({ title, items }) {
  return (
    <Container className={styles.board}>
      <p>{title}</p>
      <Container
        className={!items ? `${styles.container}` : `${styles.containerFill}`}
      >
        {items &&
          items.map((item) => (
            <ProductionCard
              key={item.id}
              title={item.name}
              dueDate={item.dueDate}
              itemCount={item.itemCount}
              itemUnit={item.itemUnit}
            />
          ))}

        {!items && (
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
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      itemCount: PropTypes.number.isRequired,
      itemUnit: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
