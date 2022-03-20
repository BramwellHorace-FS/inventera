import Container from 'react-bootstrap/Container';
import LoginForm from '../../components/forms/login';
import useValidate from '../../hooks';

export default function Login() {
  const { validated, handleSubmit } = useValidate();

  return (
    <Container fluid>
      <div>
        <h1>Logo</h1>
        <LoginForm validated={validated} handleSubmit={handleSubmit} />
      </div>
    </Container>
  );
}
