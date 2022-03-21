import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import useValidate from '../../hooks';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import FormulaForm from '../../components/forms/formulas';

export default function Forumulas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { validated, handleSubmit } = useValidate();

  return (
    <>
      <PageHeader>
        <Container>
          <Row>
            <Col sm={10}>
              <h2>Formulas</h2>
            </Col>
            <Col sm={2} className="d-flex justify-content-end">
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Add Formula
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </PageHeader>

      <SiteModal show={show} handleClose={handleClose} modalTitle="Add Formula">
        <FormulaForm
          handleClose={handleClose}
          validated={validated}
          handleSubmit={handleSubmit}
        />
      </SiteModal>

      <Container>Formula List Here</Container>
    </>
  );
}
