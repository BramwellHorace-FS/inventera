import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function RegisterForm() {
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
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Container fluid>
            <Row>
              <Col>
                <Form.Label className="text-muted h6 mt-3">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Container>
        </Form.Group>

        <Form.Group>
          <Container fluid>
            <Row>
              <Col>
                <Form.Label className="text-muted h6 mt-3">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
                <Form.Control.Feedback type="invalid">
                  Please enter a password.
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
                  Full name
                </Form.Label>
                <Form.Control type="text" placeholder="Full name" required />
                <Form.Control.Feedback type="invalid">
                  Please enter a full name.
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
                  Business name
                </Form.Label>
                <Form.Control type="text" placeholder="Business name" />
              </Col>
            </Row>
          </Container>
        </Form.Group>

        <Form.Group>
          <Container fluid>
            <Row>
              <Col>
                <Form.Label className="text-muted h6 mt-3">Website </Form.Label>
                <Form.Control type="text" placeholder="Website" />
              </Col>
            </Row>
          </Container>
        </Form.Group>

        <Container fluid className="mt-3">
          <Button variant="primary" type="submit" className="w-100">
            Register
          </Button>
        </Container>
      </Form>

      <Container className="d-flex gap-1 mt-3 justify-content-center">
        <p>Already have an account? • </p>
        <Link to="/">Login</Link>
      </Container>
    </>
  );
}
