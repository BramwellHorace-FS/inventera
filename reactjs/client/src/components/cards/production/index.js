import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProductionCard({
  title,
  dueDate,
  itemCount,
  itemUnit,
  handleShow,
}) {
  const getDaysLeft = () => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = Math.abs(due.getTime() - today.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  };

  return (
    <Container className="my-5 p-0">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {itemCount} {itemUnit} total •{' '}
            <span
              className={getDaysLeft() < 7 ? 'text-danger' : 'text-success'}
            >
              Due in {getDaysLeft()} days.
            </span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end align-items-center gap-2">
          <Button variant="link"> View </Button>
          <Button variant="link" onClick={handleShow}>
            Edit
          </Button>
          <Button variant="link"> Delete </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

ProductionCard.propTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  itemCount: PropTypes.number.isRequired,
  itemUnit: PropTypes.string.isRequired,
  handleShow: PropTypes.func.isRequired,
};
