import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Spinner,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginPending,
  loginSuccess,
  loginFailure,
} from '../../../redux/features/auth/loginSlice';
import validateForm from '../../../utils/validateForm';

export default function LoginForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // REDUX
  const dispatch = useDispatch();
  const { isAuthenticated, error, isLoading } = useSelector(
    (state) => state.login,
  );

  console.log('isAuthenticated: ', isAuthenticated);
  console.log('error: ', error);
  console.log('isLoading: ', isLoading);
  console.log(loginSuccess);
  console.log(loginFailure);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // Validate form
    validateForm(e, setValidated);

    // dispatch action loginPending
    dispatch(loginPending());
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
            {error && <Alert variant="danger">{error}</Alert>}
            <Row>
              <Col>
                <Form.Label className="text-muted h6 mt-3">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                  defaultValue={formData.email}
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
                  required
                  defaultValue={formData.password}
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
          {isLoading && (
            <span className="w-100 d-flex align-items-center justify-content-center mt-3">
              <Spinner animation="border" variant="primary" />
            </span>
          )}
        </Container>
      </Form>
      <Container fluid className="d-flex gap-1 mt-3 justify-content-center">
        <p>Do not have an account? • </p>
        <Link to="/register">Register</Link>
      </Container>
    </>
  );
}
