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
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   registerPending,
//   registerSuccess,
//   registerFailure,
// } from '../../../redux/features/auth/registerSlice';
// import { userRegister } from '../../../api/auth';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    businessName: '',
    website: '',
  });

  const error = '';
  const isLoading = '';
  const success = '';

  // const dispatch = useDispatch();
  // const { error, isLoading, success } = useSelector((state) => state.register);

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!formData.name || !formData.email || !formData.password) {
    //   dispatch(registerFailure('Please fill name, email and password'));
    // }

    // dispatch(registerPending());

    // try {
    //   const res = await userRegister(formData);

    //   if (res.status === 'success') {
    //     dispatch(registerSuccess());
    //   } else {
    //     dispatch(registerFailure(res.error.message));
    //   }
    // } catch (err) {
    //   dispatch(registerFailure(err.message));
    // }
  };

  return (
    <>
      <Form onChange={handleChange} onSubmit={handleSubmit}>
        <Container fluid>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
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
                defaultValue={formData.password}
                required
              />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6 mt-3">Full name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full name"
                name="name"
                defaultValue={formData.name}
                required
              />
            </Col>
          </Row>
        </Container>

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
                defaultValue={formData.businessName}
              />
            </Col>
          </Row>
        </Container>

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

      {isLoading && (
        <span className="w-100 d-flex align-items-center justify-content-center mt-3">
          <Spinner animation="border" variant="primary" />
        </span>
      )}
    </>
  );
}
