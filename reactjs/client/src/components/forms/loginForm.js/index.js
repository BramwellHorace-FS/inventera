import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Styles from './loginForm.module.css';

export default function LoginForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    localStorage.setItem('token', '12345');
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className={Styles.label}>
            Email (demo@demo.com)
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className={Styles.label}>
            Password (demo)
            <Form.Control type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please enter a password.
            </Form.Control.Feedback>
          </Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit" className={Styles.submitBtn}>
          Login
        </Button>
      </Form>
      <div className={Styles.linkGroup}>
        <p> Do not have an account? </p>
        <Link to="/register" className={Styles.link}>
          Register
        </Link>
      </div>
    </>
  );
}
