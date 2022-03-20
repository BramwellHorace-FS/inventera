import { Image, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function User({ userName, userImage, onLogout }) {
  return (
    <Container>
      <Row>
        <Col sm={5}>
          <Image src={userImage} roundedCircle />
        </Col>
        <Col sm={7}>
          <h3>{userName}</h3>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <Link to="/logout" onClick={onLogout}>
            Logout
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

User.propTypes = {
  userName: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};
