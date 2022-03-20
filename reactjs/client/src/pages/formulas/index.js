import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import useValidate from '../../hooks';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import MaterialForm from '../../components/forms/materials';

export default function Forumulas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { validated, handleSubmit } = useValidate();

  return (
    <>
      <PageHeader>
        <Container fluid>
          <Row>
            <Col>
              <h2>Formulas</h2>
            </Col>
            <Col>
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Add Formula
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </PageHeader>
      <SiteModal
        show={show}
        onHide={handleClose}
        validated={validated}
        handleSubmit={handleSubmit}
      >
        <MaterialForm />
      </SiteModal>

      <section>Formula List Here</section>
    </>
  );
}
