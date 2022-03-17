import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import PrimaryButton from '../../components/button';
import Header from '../../components/header';

export default function Dashboard() {
  const handleClick = () => {
    // actions to be performed on click
  };

  return (
    <>
      <Header>
        <Container fluid>
          <Row>
            <Col sm={10}>
              <h2>Dashboard</h2>
            </Col>
            <Col sm={2}>
              <PrimaryButton onClick={handleClick}>
                <BsPlusLg />
                Add Material
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </Header>
      <section>
        <Container fluid>
          <p>Dashboard Items Here</p>
        </Container>
      </section>
    </>
  );
}
