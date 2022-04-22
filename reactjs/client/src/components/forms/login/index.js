import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginPending,
  loginSuccess,
  loginFailure,
} from '../../../redux/features/loginSlice';
import authService from '../../../service/authService';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.login);

  // onChnage handler for the form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  // onSubmit handler for the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginPending());

    let msg;
    let token;

    const isAuth = await authService.login(formData);

    if (isAuth.error) {
      msg = isAuth.error.message;
      dispatch(loginFailure(msg));
    } else {
      token = isAuth.data.token;
      dispatch(loginSuccess(token));
      localStorage.user = token;
    }
  };

  return (
    <>
      <Form onChange={handleChange} onSubmit={handleSubmit}>
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
            </Col>
          </Row>
        </Container>

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
            </Col>
          </Row>
        </Container>

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
