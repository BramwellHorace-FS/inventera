import {
  Form,
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProductionForm({
  validated,
  handleSubmit,
  handleClose,
}) {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">
                Production Name
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Production Name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a name for the production.
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
                Items to make
              </Form.Label>
              <Form.Select required>
                <option defaultValue="Select product">Select product</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please enter a name for the production.
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
                Number of items to make
              </Form.Label>
              <Form.Control required type="number" placeholder="0" />
              <Form.Control.Feedback type="invalid">
                Please enter a number of items to make.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">Status</Form.Label>
              <Form.Select required>
                <option defaultValue="Select status">Select status</option>
                <option value="Incomplete">Incomplete</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please enter a name for the production.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Form.Group className="mt-3">
        <Container fluid>
          <Row>
            <Col>
              <Button variant="secondary" type="button">
                Add Product
              </Button>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">Due Date</Form.Label>
              <Form.Control required type="date" placeholder="Due Date" />
              <Form.Control.Feedback type="invalid">
                Please enter a due date.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <ButtonGroup className="mt-3 d-flex gap-3 p-2">
        <Button variant="secondary" type="button" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </ButtonGroup>
    </Form>
  );
}

ProductionForm.propTypes = {
  validated: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
