import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import PrimaryButton from '../../components/button';
import Header from '../../components/header';
import PrimaryModal from '../../components/modal';
import FormulaForm from '../../components/forms/formulaForm';

export default function Formulas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header>
        <Container fluid>
          <Row>
            <Col sm={10}>
              <h2>Formulas</h2>
            </Col>
            <Col sm={2}>
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Add Formula
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </Header>
      <Container fluid>
        <PrimaryModal
          show={show}
          handleClose={handleClose}
          modalTitle="Add Formula"
        >
          <FormulaForm handleClose={handleClose} />
        </PrimaryModal>
        <p>Add Formulas Here</p>
      </Container>
    </>
  );
}
