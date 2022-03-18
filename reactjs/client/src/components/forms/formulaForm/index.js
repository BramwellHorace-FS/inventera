import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PropTypes from 'prop-types';
import Styles from './formulaForm.module.css';

export default function FormulaForm({ handleClose }) {
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
        <Form.Label className={Styles.label}>
          Name
          <Form.Control type="text" placeholder="Enter formula name" required />
          <Form.Control.Feedback type="invalid">
            Please enter a name for the formula.
          </Form.Control.Feedback>
        </Form.Label>
      </Form.Group>

      <Form.Group>
        <Form.Label className={Styles.label}>
          Container Fill (oz)
          <Form.Control
            type="number"
            placeholder="Enter container fill"
            required
            step="0.1"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a container fill in oz. Numbers only.
          </Form.Control.Feedback>
        </Form.Label>
        <Form.Label className={Styles.label}>
          Fragrance Load (%)
          <Form.Control
            type="number"
            placeholder="Enter fragrance load"
            required
            step="0.1"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a fragrance load percentage. Numbers only.
          </Form.Control.Feedback>
        </Form.Label>
      </Form.Group>

      <Form.Group>
        <Form.Label className={Styles.label}>
          Notes
          <Form.Control as="textarea" rows="3" placeholder="Enter notes" />
        </Form.Label>
      </Form.Group>
      <ButtonGroup className={Styles.btnGroup}>
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

FormulaForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
