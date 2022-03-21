import { Container, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProductionCard({
  title,
  dueDate,
  itemCount,
  itemUnit,
}) {
  return (
    <Container className="my-5 p-0">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {itemCount} {itemUnit} • due on: {dueDate}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

ProductionCard.defaultProps = {
  title: 'Candle Collection',
  dueDate: '12/31/2019',
  itemCount: '30',
  itemUnit: 'pcs',
};

ProductionCard.propTypes = {
  title: PropTypes.string,
  dueDate: PropTypes.string,
  itemCount: PropTypes.string,
  itemUnit: PropTypes.string,
};
