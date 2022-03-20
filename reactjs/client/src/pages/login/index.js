import Container from 'react-bootstrap/Container';
import LoginForm from '../../components/forms/login';

export default function Login() {
  return (
    <Container fluid>
      <div>
        <h1>Logo</h1>
        <LoginForm />
      </div>
    </Container>
  );
}
