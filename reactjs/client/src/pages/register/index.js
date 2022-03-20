import Container from 'react-bootstrap/Container';
import RegisterForm from '../../components/forms/register';
import useValidate from '../../hooks';

export default function Register() {
  const { validated, handleSubmit } = useValidate();

  return (
    <Container fluid>
      <Container>
        <h1>Logo</h1>
        <RegisterForm validated={validated} handleSubmit={handleSubmit} />
      </Container>
    </Container>
  );
}
