import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PropTypes from 'prop-types';
import Styles from './productForm.module.css';

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
        <Form.Label className={Styles.labelFw}>
          Product Name
          <Form.Control type="text" placeholder="Product Name" required />
        </Form.Label>
      </Form.Group>
      <Form.Group className={Styles.flex}>
        <Form.Label className={Styles.label}>
          Current Stock Level
          <Form.Control
            type="number"
            placeholder="Current Stock Level"
            required
          />
        </Form.Label>
        <Form.Label className={Styles.label}>
          Unit Type
          <Form.Select required>
            <option>Select Unit</option>
            <option value="kg">Kilogram</option>
            <option value="g">Gram</option>
            <option value="l">Liter</option>
            <option value="ml">Milliliter</option>
            <option value="piece">Piece</option>
            <option value="oz">Ounce</option>
          </Form.Select>
        </Form.Label>
      </Form.Group>
      <Form.Group className={Styles.flex}>
        <Form.Label className={Styles.label}>
          Unit Price
          <Form.Control type="number" placeholder="Unit Price" required />
        </Form.Label>
        <Form.Label className={Styles.label}>
          Category
          <Form.Control type="text" placeholder="Category" required />
        </Form.Label>
      </Form.Group>
      <Form.Group className={Styles.flex}>
        <Form.Label className={Styles.label}>
          Materials Used
          <Form.Select required>
            <option>Select Material</option>
          </Form.Select>
        </Form.Label>
        <Form.Label className={Styles.label}>
          Amount
          <Form.Control type="number" placeholder="0" required />
        </Form.Label>
        <Form.Label className={Styles.label}>
          Unit Type
          <Form.Select required>
            <option value="oz">Ounces</option>
            <option value="g">Grams</option>
            <option value="kg">Kilograms</option>
            <option value="ml">Milliliters</option>
            <option value="l">Liters</option>
            <option value="piece">Pieces</option>
          </Form.Select>
        </Form.Label>
      </Form.Group>

      <Form.Group className={Styles.flex}>
        <Button type="button" variant="secondary">
          Add Material
        </Button>
      </Form.Group>

      <ButtonGroup className={Styles.formFooter}>
        <Button
          variant="secondary"
          onClick={handleClose}
          className={Styles.cancelBtn}
        >
          Cancel
        </Button>
        <Button variant="primary" type="submit" className={Styles.submitBtn}>
          Submit
        </Button>
      </ButtonGroup>
    </Form>
  );
}

ProductForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
