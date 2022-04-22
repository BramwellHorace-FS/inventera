import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function User({ userName, avatar, handleLogout }) {
  return (
    <Container className={styles.user}>
      <Row className="align-items-center gap-2">
        <Col className="col-3">
          <Image src={avatar} alt={userName} className="rounded-circle w-100" />
        </Col>
        <Col className="col-8">
          <h3 className="light h5">{userName}</h3>
          <Link className="h6" to="/" onClick={handleLogout}>
            Logout
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

User.propTypes = {
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
