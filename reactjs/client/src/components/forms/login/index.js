import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
import validateForm from '../../../utils/validateForm';

export default function LoginForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Redux
  // const dispatch = useDispatch();

  // const { isAuthenticated, isLoading, success } = useSelector(
  //   (state) => state.auth,
  // );

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
        validated={validated}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Container fluid>
            <Row>
              <Col>
                <Form.Label className="text-muted h6 mt-3">
                  Email (demo@demo.com){' '}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
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
                <Form.Label className="text-muted h6 mt-3">
                  Password (demo)
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a password.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Container>
        </Form.Group>

        <Container fluid className="mt-3">
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Container>
      </Form>
      <Container fluid className="d-flex gap-1 mt-3 justify-content-center">
        <p>Do not have an account? • </p>
        <Link to="/register">Register</Link>
      </Container>
    </>
  );
}
