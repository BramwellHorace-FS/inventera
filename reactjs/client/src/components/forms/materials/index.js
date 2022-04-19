import React, { useState } from 'react';
import {
  Form,
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import validateForm from '../../../utils/validateForm';

export default function MaterialForm({ handleClose }) {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    stock: '',
    minStock: '',
    price: '',
    unit: '',
    category: '',
    supplier: '',
    sku: '',
    lastOrdered: '',
  });

  // Redux state
  // const { materials, status } = useSelector((state) => state.materials);

  // Redux dispatch
  // const dispatch = useDispatch();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    validateForm(e, setValidated);
  };

  // on select change

  return (
    <Form
      onChange={handleChange}
      onSubmit={handleSubmit}
      noValidate
      validated={validated}
    >
      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">Material Name </Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter Material Name"
                required
                defaultValue={formData.name}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a name.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Form.Group>
        <Container fluid>
          <Row className="align-items-center">
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">
                Current Stock Level
              </Form.Label>
              <Form.Control
                name="stock"
                type="number"
                placeholder="Enter Current Stock Level"
                required
                min="0"
                step=".01"
                defaultValue={formData.stock}
              />
              <Form.Control.Feedback type="invalid">
                Please enter stock level
              </Form.Control.Feedback>
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">
                Min Stock Level
              </Form.Label>
              <Form.Control
                name="minStock"
                type="number"
                placeholder="Enter Min Stock Level"
                required
                min="0"
                step=".01"
                defaultValue={formData.minStock}
              />
              <Form.Control.Feedback type="invalid">
                Please enter min stock level
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Form.Group>
        <Container fluid>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">Unit Price</Form.Label>
              <Form.Control
                name="price"
                type="number"
                placeholder="Enter Unit Price"
                required
                min="0"
                step=".01"
                defaultValue={formData.price}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid unit price.
              </Form.Control.Feedback>
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">Unit Type</Form.Label>
              <Form.Select
                name="unit"
                placeholder="Select Unit Type"
                aria-label="Default select example"
                required
                defaultValue={formData.unit}
              >
                <option value="">Select Unit Type</option>
                <option value="oz">Ounces (oz)</option>
                <option value="kg">Kilograms (kg)</option>
                <option value="g">Grams (g)</option>
                <option value="l">Liters (l)</option>
                <option value="ml">Milliliters (ml)</option>
                <option value="piece">Pieces</option>
                <option value="lb">Pounds (lb)</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a unit type.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Form.Group>
        <Container fluid>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">Category </Form.Label>
              <Form.Control
                name="category"
                type="text"
                placeholder="Enter Category"
                required
                defaultValue={formData.category}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a category.
              </Form.Control.Feedback>
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">Supplier </Form.Label>
              <Form.Control
                name="supplier"
                type="text"
                placeholder="Enter Supplier"
                required
                defaultValue={formData.supplier}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a supplier.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Form.Group>
        <Container fluid>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">SKU </Form.Label>
              <Form.Control
                name="sku"
                type="text"
                placeholder="Enter SKU"
                defaultValue={formData.sku}
              />
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">
                Last Ordered
              </Form.Label>
              <Form.Control
                name="lastOrdered"
                type="date"
                placeholder="Enter Last Ordered"
                defaultValue={formData.lastOrdered}
              />
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <ButtonGroup className="mt-3 d-flex gap-3 p-2">
        <Button type="button" variant="secondary" onClick={handleClose}>
          Cancel
        </Button>

        <Button type="submit" variant="primary">
          Save
        </Button>
      </ButtonGroup>
    </Form>
  );
}

// PropTypes
MaterialForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
