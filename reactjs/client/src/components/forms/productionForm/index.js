import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PropTypes from 'prop-types';
import Styles from './productionForm.module.css';

export default function ProductionForm({ handleClose }) {
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
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className={Styles.form}
    >
      <Form.Group>
        <Form.Label className={Styles.label}>
          Production Name
          <Form.Control required type="text" placeholder="Production Name" />
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label className={Styles.label}>
          Items to make
          <Form.Select required>
            <option>Select product</option>
          </Form.Select>
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label className={Styles.label}>
          Number of items to make
          <Form.Control required type="number" placeholder="0" />
        </Form.Label>
      </Form.Group>
      <Button variant="secondary" type="button">
        Add Product
      </Button>
      <Form.Group>
        <Form.Label className={Styles.label}>
          Due Date
          <Form.Control required type="date" placeholder="Due Date" />
        </Form.Label>
      </Form.Group>
      <ButtonGroup className={Styles.btnGroup}>
        <Button
          variant="secondary"
          type="button"
          onClick={handleClose}
          className={Styles.cancelBtn}
        >
          Cancel
        </Button>
        <Button variant="primary" type="submit" className={Styles.submitBtn}>
          Save
        </Button>
      </ButtonGroup>
    </Form>
  );
}

ProductionForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
