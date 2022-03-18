import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Styles from './registerForm.module.css';

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
          <Form.Label className={Styles.label}>
            Email
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className={Styles.label}>
            Password
            <Form.Control type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please enter a password.
            </Form.Control.Feedback>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className={Styles.label}>
            Full name
            <Form.Control type="text" placeholder="Full name" required />
            <Form.Control.Feedback type="invalid">
              Please enter a full name.
            </Form.Control.Feedback>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className={Styles.label}>
            Business name
            <Form.Control type="text" placeholder="Business name" />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className={Styles.label}>
            Website
            <Form.Control type="text" placeholder="Website" />
          </Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit" className={Styles.submitBtn}>
          Register
        </Button>
      </Form>

      <div className={Styles.linkGroup}>
        <p>Already have an account?</p>
        <Link className={Styles.link} to="/">
          Login
        </Link>
      </div>
    </>
  );
}
