import { Container, Image } from 'react-bootstrap';
import RegisterForm from '../../components/forms/register';
import useValidate from '../../hooks';
import logo from '../../assets/images/logo-dark.png';

export default function Register() {
  const { validated, handleSubmit } = useValidate();

  return (
    <Container className="w-50 d-flex flex-column justify-content-center align-items-center vh-100">
      <Container className="w-50">
        <div className="text-center mb-2">
          <Image src={logo} alt="logo" className="w-75 mx-auto" />
        </div>
        <RegisterForm validated={validated} handleSubmit={handleSubmit} />
      </Container>
    </Container>
  );
}
