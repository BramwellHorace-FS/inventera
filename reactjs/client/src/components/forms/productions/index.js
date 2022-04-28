import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProductSelect from '../productSelect';
import StatusSelect from '../statusSelect';

export default function ProductionForm({
  handleChange,
  handleSubmit,
  handleClose,
  validated,
  formData,
}) {
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      {/* PRODUCTION NAME */}
      <Form.Group>
        <Container>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">
                Production Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Production Name"
                defaultValue={formData.name}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a production name.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* PRODUCT SELECT & QUANTITY */}
      <Form.Group className="mt-3">
        <Container>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Product <span className="text-danger">*</span>
              </Form.Label>
              <ProductSelect defaultValue={formData.product} />
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Quantity <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="quantity"
                type="number"
                step=".01"
                min="0"
                placeholder="Enter product quantity"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter product quantity.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* STATUS SELECT & DUE DATE */}
      <Form.Group className="mt-3">
        <Container>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Status <span className="text-danger">*</span>
              </Form.Label>
              <StatusSelect defaultValue={formData.status} />
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Due Date <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="dueDate"
                type="date"
                placeholder="Select dute date"
                defaultValue={formData.dueDate}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please select a due date.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* NOTES */}
      <Form.Group className="mt-3">
        <Container>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">Notes</Form.Label>
              <Form.Control
                name="notes"
                as="textarea"
                rows="3"
                placeholder="Enter notes"
                defaultValue={formData.notes}
              />
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* BUTTONS */}
      <Container className="d-flex justify-content-end mt-4 mb-2">
        <Row>
          <Col sm={6}>
            <Button type="button" variant="outline-dark" onClick={handleClose}>
              Cancel
            </Button>
          </Col>

          <Col sm={6}>
            <Button type="submit" variant="primary" disabled={!validated}>
              Save
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

/* PROP TYPES */
ProductionForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
  formData: PropTypes.object.isRequired,
};
