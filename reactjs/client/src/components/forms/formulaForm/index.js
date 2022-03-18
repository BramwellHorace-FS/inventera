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
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter formula name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a name for the formula.
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
                Container Fill (oz)
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter container fill"
                required
                step="0.1"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a container fill in oz. Numbers only.
              </Form.Control.Feedback>
            </Col>

            <Col>
              <Form.Label className="text-muted h6 mt-3">
                Fragrance Load (%)
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter fragrance load"
                required
                step="0.1"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a fragrance load percentage. Numbers only.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">Notes </Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter notes" />
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

FormulaForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
