import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import PrimaryButton from '../../components/button';
import Header from '../../components/header';
import PrimaryModal from '../../components/modal';
import MaterialForm from '../../components/forms/materialForm';

export default function Materials() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header>
        <Container fluid>
          <Row>
            <Col sm={10}>
              <h2>Materials</h2>
            </Col>
            <Col sm={2}>
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Add Material
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </Header>
      <Container fluid>
        <PrimaryModal
          show={show}
          handleClose={handleClose}
          modalTitle="Add Material"
        >
          <MaterialForm handleClose={handleClose} />
        </PrimaryModal>
        <p>Materials Here</p>
      </Container>
    </>
  );
}
