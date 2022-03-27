import {
  Form,
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function MaterialForm({ validated, handleSubmit, handleClose }) {
  return (
    <Form onSubmit={handleSubmit} noValidate validated={validated}>
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
                name="stockLevel"
                type="number"
                placeholder="Enter Current Stock Level"
                required
                step="0.1"
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
                name="minStockLevel"
                type="number"
                placeholder="Enter Min Stock Level"
                required
                step="0.1"
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
                name="unitPrice"
                type="number"
                placeholder="Enter Unit Price"
                required
                step="0.1"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a unit price.
              </Form.Control.Feedback>
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">Unit Type</Form.Label>
              <Form.Select
                name="unitType"
                placeholder="Select Unit Type"
                required
              >
                <option defaultValue="Select unit type">
                  Select unit type
                </option>
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

      <Form.Group>
        <Container fluid>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">Category </Form.Label>
              <Form.Control
                name="Category"
                type="text"
                placeholder="Enter Category"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a category.
              </Form.Control.Feedback>
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">Supplier </Form.Label>
              <Form.Control
                name="Supplier"
                type="text"
                placeholder="Enter Supplier"
                required
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
                name="SKU"
                type="number"
                placeholder="Enter SKU"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a SKU number.
              </Form.Control.Feedback>
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">
                Last Ordered
              </Form.Label>
              <Form.Control
                name="LastOrdered"
                type="date"
                placeholder="Enter Last Ordered"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a last ordered date.
              </Form.Control.Feedback>
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

MaterialForm.propTypes = {
  validated: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
