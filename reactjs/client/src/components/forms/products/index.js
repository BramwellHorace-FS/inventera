import {
  Form,
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProductForm({ validated, handleSubmit, handleClose }) {
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
            <Col md={6}>
              <Form.Label className="text-muted h6 mt-3">
                Current Stock Level
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
            <Col md={6}>
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
            <Col md={6}>
              <Form.Label className="text-muted h6 mt-3">Unit Price</Form.Label>
              <Form.Control type="number" placeholder="Unit Price" required />
              <Form.Control.Feedback type="invalid">
                Please enter a unit price.
              </Form.Control.Feedback>
            </Col>
            <Col md={6}>
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
            <Col md={4}>
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
            <Col md={4}>
              <Form.Label className="text-muted h6 mt-3">Amount </Form.Label>
              <Form.Control type="number" placeholder="0" required />
              <Form.Control.Feedback type="invalid">
                Please enter an amount.
              </Form.Control.Feedback>
            </Col>
            <Col md={4}>
              <Form.Label className="text-muted h6 mt-3">Unit Type </Form.Label>
              <Form.Select required>
                <option value="kg">Kilograms (kg)</option>
                <option value="g">Grams (g)</option>
                <option value="l">Liters (l)</option>
                <option value="ml">Milliliters (ml)</option>
                <option value="piece">Pieces</option>
                <option value="lb">Pounds (lb)</option>
                <option value="oz">Ounces (oz)</option>
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
  validated: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
