import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import UnitSelect from '../unitSelect';
import CategorySelect from '../categorySelect';

export default function ProducForm({
  handleChange,
  handleSubmit,
  handleClose,
  validated,
  formData,
  handleSelect,
}) {
  const [createCat, setCreateCat] = useState(false);

  const { materials } = useSelector((state) => state.material);

  const handleCreateCat = () => {
    setCreateCat(!createCat);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      {/* PRODUCT NAME */}
      <Form.Group>
        <Container>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">
                Product Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Product Name"
                defaultValue={formData.name}
                minLength="5"
                maxLength="150"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid product name (5-150 characters).
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* STOCK & MIN STOCK */}
      <Form.Group className="mt-3">
        <Container>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Stock <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="stock"
                type="number"
                step=".01"
                placeholder="Enter stock level"
                defaultValue={formData.stock}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide stock level
              </Form.Control.Feedback>
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Min. Stock <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="minStock"
                type="number"
                step=".01"
                placeholder="Enter stock level"
                defaultValue={formData.minStock}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide min stock level
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* UNIT TYPE & CATEGORY */}
      <Form.Group className="mt-1">
        <Container>
          <Row>
            {/* unit type */}
            <Col sm={6}>
              <UnitSelect defaultValue={formData.unit} />
            </Col>
            {/* category select */}
            <Col sm={6} className="mt-2">
              {!createCat ? (
                <>
                  <CategorySelect defaultValue={formData.categoryId} />
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
                  <Form.Label className="text-muted h6">
                    Category <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="category"
                    type="text"
                    placeholder="Category"
                    required
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a category.
                  </Form.Control.Feedback>
                  <button
                    type="button"
                    className="btn btn-link p-0 pt-0"
                    onClick={handleCreateCat}
                  >
                    Select existing category
                  </button>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* UNIT COST & SKU */}
      <Form.Group className="mt-1">
        <Container>
          <Row>
            <Col sm={6}>
              <Form.Label className="text-muted h6">
                Unit Cost <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                name="unitCost"
                type="number"
                step=".01"
                placeholder="Enter unit cost"
                defaultValue={formData.unitCost}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a unit cost
              </Form.Control.Feedback>
            </Col>
            <Col sm={6}>
              <Form.Label className="text-muted h6"> SKU </Form.Label>
              <Form.Control
                name="sku"
                text="text"
                placeholder="SKU"
                defaultValue={formData.sku}
              />
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* MATERIALS USED */}
      <Form.Group className="mt-3">
        <Container>
          <Row>
            <Col sm={12}>
              <Form.Label className="text-muted h6">
                Select Material(s)
              </Form.Label>
              <Form.Select
                name="materials"
                multiple
                onChange={handleSelect}
                defaultValue={formData.materials}
              >
                {materials &&
                  materials.map((material) => (
                    <option key={material.id} value={material.id}>
                      {material.name}
                    </option>
                  ))}
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Container className="d-flex justify-content-end mt-4 mb-2">
        <Row>
          <Col sm={6}>
            <Button type="button" variant="outline-dark" onClick={handleClose}>
              Cancel
            </Button>
          </Col>

          <Col sm={6}>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

// PropTypes
ProducForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
  formData: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
};
