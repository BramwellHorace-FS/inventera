import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getDaysLeft } from '../../utils/date';

export default function ProductionModal({ production, show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {production.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="primary">
          <strong>Due Date: </strong>

          <span
            className={
              getDaysLeft(production.dueDate) < 7
                ? 'text-danger'
                : 'text-success'
            }
          >
            {production.dueDate}
          </span>
        </p>
        <p className="d-flex justify-content-start gap-2 primary">
          <strong>Quantity: </strong> {production.quantity}
        </p>
        <p className="d-flex justify-content-start gap-2 primary align-items-center">
          <strong>Status: </strong>
          <span
            className={`text-light badge badge-${
              production.statusId === 0
                ? 'black'
                : production.statusId === 1
                ? 'blue'
                : production.statusId === 2
                ? 'green'
                : ''
            }`}
          >
            {production.status}
          </span>
        </p>
        <p className="d-flex justify-content-start gap-2 primary">
          <strong>Notes: </strong> {production.notes && production.notes}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

/* PROP TYPES */
ProductionModal.propTypes = {
  production: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
