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
import UnitSelect from '../unitSelect';
import CategorySelect from '../categorySelect';
import SupplierSelect from '../supplierSelect';

export default function MaterialForm({
  handleClose,
  handleChange,
  handleSubmit,
  formData,
}) {
  const [createCat, setCreateCat] = useState(false);
  const [createSup, setCreateSup] = useState(false);

  const handleCreateCat = () => {
    setCreateCat(!createCat);
  };

  const handleCreateSup = () => {
    setCreateSup(!createSup);
  };

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
                name="unitCost"
                type="number"
                placeholder="Enter Unit Price"
                required
                min="0"
                step=".01"
                defaultValue={formData.unitCost}
              />
            </Col>
            <Col sm={6}>
              <UnitSelect name="unit" defaultValue={formData.unit} />
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Form.Group className="mt-3">
        <Container fluid>
          <Row>
            {/* Category */}
            <Col sm={6}>
              {!createCat ? (
                <>
                  <CategorySelect
                    name="category"
                    defaultValue={formData.categoryId}
                  />
                  {/* Create new category  */}
                  <button
                    type="button"
                    className="btn btn-link p-0 pt-1"
                    onClick={handleCreateCat}
                  >
                    Create new category
                  </button>
                </>
              ) : (
                <>
                  <Form.Label className="text-muted h6">Category</Form.Label>
                  <Form.Control
                    name="category"
                    type="text"
                    placeholder="Enter Category"
                    required
                    defaultValue={formData.category}
                  />
                  <button
                    type="button"
                    className="btn btn-link p-0 pt-1"
                    onClick={handleCreateCat}
                  >
                    Select existing category
                  </button>
                </>
              )}
            </Col>
            {/* Supplier */}
            <Col sm={6}>
              {!createSup ? (
                <>
                  <SupplierSelect
                    name="supplier"
                    defaultValue={formData.supplierId}
                  />
                  {/* Create new supplier  */}
                  <button
                    type="button"
                    className="btn btn-link p-0 pt-1"
                    onClick={handleCreateSup}
                  >
                    Create new supplier
                  </button>
                </>
              ) : (
                <>
                  <Form.Label className="text-muted h6">Supplier</Form.Label>
                  <Form.Control
                    name="supplier"
                    type="text"
                    placeholder="Enter Supplier"
                    required
                    defaultValue={formData.supplier}
                  />
                  <button
                    type="button"
                    className="btn btn-link p-0 pt-1"
                    onClick={handleCreateSup}
                  >
                    Select existing supplier
                  </button>
                </>
              )}
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
                required
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
    supplierId: PropTypes.string,
    categoryId: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
