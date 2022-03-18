import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PropTypes from 'prop-types';
import Styles from './materialForm.module.css';

export default function MaterialForm({ handleClose }) {
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
    <Form onSubmit={handleSubmit} noValidate validated={validated}>
      <Form.Group>
        <Form.Label className={Styles.labelFw}>
          Material Name
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Material Name"
            required
          />
        </Form.Label>
      </Form.Group>
      <Form.Group className={Styles.formGroup}>
        <Form.Label className={Styles.label}>
          Current Stock Level
          <Form.Control
            name="stockLevel"
            type="number"
            placeholder="Enter Current Stock Level"
            required
          />
        </Form.Label>

        <Form.Label className={Styles.label}>
          Min Stock Level
          <Form.Control
            name="minStockLevel"
            type="number"
            placeholder="Enter Min Stock Level"
            required
          />
        </Form.Label>
      </Form.Group>

      <Form.Group className={Styles.formGroup}>
        <Form.Label className={Styles.label}>
          Unit Price
          <Form.Control
            name="unitPrice"
            type="number"
            placeholder="Enter Unit Price"
            required
          />
        </Form.Label>

        <Form.Label className={Styles.label}>
          Unit Type
          <Form.Select
            name="unitType"
            placeholder="Select Unit Type"
            required
            aria-label="Default select unit type"
          >
            <option>Select unit type</option>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="l">l</option>
            <option value="ml">ml</option>
            <option value="piece">piece</option>
            <option value="lb">lb</option>
            <option value="oz">oz</option>
          </Form.Select>
        </Form.Label>
      </Form.Group>

      <Form.Group className={Styles.formGroup}>
        <Form.Label className={Styles.label}>
          Category
          <Form.Control
            name="Category"
            type="text"
            placeholder="Enter Category"
            required
          />
        </Form.Label>

        <Form.Label className={Styles.label}>
          Supplier
          <Form.Control
            name="Supplier"
            type="text"
            placeholder="Enter Supplier"
            required
          />
        </Form.Label>
      </Form.Group>

      <Form.Group className={Styles.formGroup}>
        <Form.Label className={Styles.label}>
          SKU
          <Form.Control
            name="SKU"
            type="number"
            placeholder="Enter SKU"
            required
          />
        </Form.Label>

        <Form.Label className={Styles.label}>
          Last Ordered
          <Form.Control
            name="LastOrdered"
            type="date"
            placeholder="Enter Last Ordered"
            required
          />
        </Form.Label>
      </Form.Group>

      <ButtonGroup className={Styles.btnGroup}>
        <Button
          type="button"
          className={Styles.cancelBtn}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button type="submit" className={Styles.submitBtn}>
          Save
        </Button>
      </ButtonGroup>
    </Form>
  );
}

MaterialForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
