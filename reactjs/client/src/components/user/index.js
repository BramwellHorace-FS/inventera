import { Image, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function User({ userName, userImage, onLogout }) {
  return (
    <Container className={styles.user}>
      <Row>
        <Col className="col-2">
          <Image src={userImage} roundedCircle fluid />
        </Col>
        <Col className="col-10">
          <h3 className="light">{userName}</h3>
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
