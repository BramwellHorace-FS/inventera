import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import useValidate from '../../hooks';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import ProductionForm from '../../components/forms/productions';

export default function Productions() {
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
              <h2>Productions</h2>
            </Col>
            <Col sm={2}>
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Start Production
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </PageHeader>
      <SiteModal
        show={show}
        handleClose={handleClose}
        modalTitle="Start Production"
      >
        <ProductionForm
          handleClose={handleClose}
          validated={validated}
          handleSubmit={handleSubmit}
        />
      </SiteModal>

      <Container>Production List Here</Container>
    </>
  );
}
