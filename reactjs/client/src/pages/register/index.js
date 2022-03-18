import Container from 'react-bootstrap/Container';
import RegisterForm from '../../components/forms/registerForm';
import Styles from './register.module.css';

export default function Register() {
  return (
    <Container fluid className={Styles.container}>
      <Container>
        <h1 className={Styles.logo}>Logo</h1>
        <RegisterForm />
      </Container>
    </Container>
  );
}
