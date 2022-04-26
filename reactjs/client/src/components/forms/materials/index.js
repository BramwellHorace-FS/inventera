import React from 'react';
import {
  Form,
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
// import validateForm from '../../../utils/validateForm';
import UnitSelect from '../unitSelect';
import CategorySelect from '../categorySelect';

export default function MaterialForm({
  handleClose,
  handleChange,
  handleSubmit,
  formData,
}) {
  console.log('formData', formData);

  return (
    <Form onChange={handleChange} onSubmit={handleSubmit}>
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
                defaultValue={formData.unitCost}
              />
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">Unit Type</Form.Label>
              <UnitSelect name="unit" defaultValue={formData.unit} />
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Form.Group>
        <Container fluid>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6 mt-3">Category </Form.Label>
              <CategorySelect
                name="category"
                defaultValue={formData.category}
              />
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
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string,
    stock: PropTypes.string,
    minStock: PropTypes.string,
    unitCost: PropTypes.string,
    unit: PropTypes.string,
    category: PropTypes.string,
    supplier: PropTypes.string,
    sku: PropTypes.string,
    lastOrdered: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
