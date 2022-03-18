import { useState } from 'react';
import {
  Form,
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProductForm({ handleClose }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">
                Product Name{' '}
              </Form.Label>
              <Form.Control type="text" placeholder="Product Name" required />
              <Form.Control.Feedback type="invalid">
                Please enter a name for the product.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">
                Current Stock Level{' '}
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Current Stock Level"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a current stock.
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Label className="text-muted h6 mt-3">Unit Type</Form.Label>
              <Form.Select required>
                <option>Select Unit</option>
                <option value="kg">Kilogram</option>
                <option value="g">Gram</option>
                <option value="l">Liter</option>
                <option value="ml">Milliliter</option>
                <option value="piece">Piece</option>
                <option value="oz">Ounce</option>
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
            <Col>
              <Form.Label className="text-muted h6 mt-3">Unit Price</Form.Label>
              <Form.Control type="number" placeholder="Unit Price" required />
              <Form.Control.Feedback type="invalid">
                Please enter a unit price.
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Label className="text-muted h6 mt-3">Category </Form.Label>
              <Form.Control type="text" placeholder="Category" required />
              <Form.Control.Feedback type="invalid">
                Please enter a category.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">
                Materials Used
              </Form.Label>
              <Form.Select required>
                <option>Select Material</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a material.
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Label className="text-muted h6 mt-3">Amount </Form.Label>
              <Form.Control type="number" placeholder="0" required />
              <Form.Control.Feedback type="invalid">
                Please enter an amount.
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Label className="text-muted h6 mt-3">Unit Type </Form.Label>
              <Form.Select required>
                <option value="oz">Ounces</option>
                <option value="g">Grams</option>
                <option value="kg">Kilograms</option>
                <option value="ml">Milliliters</option>
                <option value="l">Liters</option>
                <option value="piece">Pieces</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a unit type.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Form.Group className="mt-3">
        <Container fluid>
          <Row>
            <Col>
              <Button type="button" variant="secondary">
                Add Material
              </Button>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <ButtonGroup className="mt-3 d-flex gap-3 p-2">
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </ButtonGroup>
    </Form>
  );
}

ProductForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
