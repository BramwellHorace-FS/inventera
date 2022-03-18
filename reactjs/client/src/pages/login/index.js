import Container from 'react-bootstrap/Container';
import LoginForm from '../../components/forms/loginForm.js';
import Styles from './login.module.css';

export default function Login() {
  return (
    <Container fluid className={Styles.container}>
      <div>
        <h1 className={Styles.logo}>Logo</h1>
        <LoginForm />
      </div>
    </Container>
  );
}
