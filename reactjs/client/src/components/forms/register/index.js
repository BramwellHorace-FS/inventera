import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
import validateForm from '../../../utils/validateForm';

export default function RegisterForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    businessName: '',
    website: '',
  });

  // Redux
  // const dispatch = useDispatch();
  // const { isAuthenticated } = useSelector((state) => state.auth);

  // handleChange
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit
  const handleSubmit = (e) => {
    validateForm(e, setValidated);
  };

  return (
    <>
      <Form
        noValidate
        onChange={handleChange}
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Container fluid>
            <Row>
              <Col>
                <Form.Label className="text-muted h6 mt-3">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  defaultValue={formData.email}
                  required
                />
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
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  defaultValue={formData.password}
                  required
                />
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
                <Form.Control
                  type="text"
                  placeholder="Full name"
                  name="name"
                  defaultValue={formData.name}
                  required
                />
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
                <Form.Control
                  type="text"
                  placeholder="Business name"
                  name="businessName"
                  defaaultValue={formData.businessName}
                />
              </Col>
            </Row>
          </Container>
        </Form.Group>

        <Form.Group>
          <Container fluid>
            <Row>
              <Col>
                <Form.Label className="text-muted h6 mt-3">Website </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Website"
                  name="website"
                  defaultValue={formData.website}
                />
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
