import React, { useState } from 'react';
import {
  Form,
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import validateForm from '../../../utils/validateForm';
import ProductSelect from '../productSelect';

export default function ProductionForm({ handleClose }) {
  const [validated, setValidated] = useState(false);
  // const [products, setProducts] = useState([]);
  const [selectInput, setSelectInput] = useState([
    <ProductSelect key="1" defaultValue="" />,
  ]);
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    quantity: '',
    status: '',
    dueDate: '',
  });

  // handleChange
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit
  const handleSubmit = (e) => {
    validateForm(e, setValidated);
  };

  // handleAddProduct
  const handleAddProduct = () => {
    setSelectInput([
      ...selectInput,
      <ProductSelect key={selectInput.length + 1} defaultValue="" />,
    ]);
  };

  // handleRemoveProduct
  const handleRemoveProduct = () => {
    setSelectInput(selectInput.slice(0, selectInput.length - 1));
  };

  return (
    <Form
      onChange={handleChange}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      {/* PRODUCTION NAME */}
      <Container fluid>
        <Row>
          <Col>
            <Form.Label className="text-muted h6 mt-3">
              Production Name
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Production Name"
              name="name"
              defaultValue={formData.name}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a name for the production.
            </Form.Control.Feedback>
          </Col>
        </Row>
      </Container>

      {/* PRODUCTS TO MAKE */}
      <Container fluid>
        <Row>
          <Col>
            <Form.Label className="text-muted h6 mt-3">
              Items to make
            </Form.Label>
            {selectInput &&
              selectInput.map((input) => {
                if (selectInput.length > 1) {
                  return (
                    // Add unique key to each element
                    <React.Fragment key={input.key}>
                      <Row>
                        <Col sm="9">{input}</Col>
                        <Col sm="3">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handleRemoveProduct}
                          >
                            Remove
                          </button>
                        </Col>
                      </Row>
                    </React.Fragment>
                  );
                }
                return input;
              })}
          </Col>
        </Row>
      </Container>

      {/* ADD PRODUCT BUTTON */}
      <Container fluid className="mt-3">
        <Row>
          <Col>
            <Button
              variant="secondary"
              type="button"
              onClick={handleAddProduct}
            >
              Add Product
            </Button>
          </Col>
        </Row>
      </Container>

      {/* QUANTITY */}
      <Container fluid>
        <Row>
          <Col>
            <Form.Label className="text-muted h6 mt-3">
              Number of items to make
            </Form.Label>
            <Form.Control
              min="1"
              required
              type="number"
              placeholder="0"
              name={formData.quantity}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a number of items to make. Must be greater than 0.
            </Form.Control.Feedback>
          </Col>
        </Row>
      </Container>

      {/* STATUS */}
      <Container fluid>
        <Row>
          <Col>
            <Form.Label className="text-muted h6 mt-3">Status</Form.Label>
            <Form.Select
              required
              name="status"
              defaultValue={formData.status}
              arial-label="Select a status"
            >
              <option value="">Select status</option>
              <option value="Incomplete">Incomplete</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a status for the production.
            </Form.Control.Feedback>
          </Col>
        </Row>
      </Container>

      {/* DUE DATE */}
      <Container fluid>
        <Row>
          <Col>
            <Form.Label className="text-muted h6 mt-3">Due Date</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Due Date"
              defaultValue={formData.dueDate}
              name="dueDate"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a due date.
            </Form.Control.Feedback>
          </Col>
        </Row>
      </Container>

      <ButtonGroup className="mt-3 d-flex gap-3 p-2">
        <Button variant="secondary" type="button" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </ButtonGroup>
    </Form>
  );
}

ProductionForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
