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
        <Container fluid>
          <Row>
            <Col>
              <h2>Productions</h2>
            </Col>
            <Col>
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Add Production
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </PageHeader>
      <SiteModal show={show} onHide={handleClose}>
        <ProductionForm
          handleClose={handleClose}
          validated={validated}
          handleSubmit={handleSubmit}
        />
      </SiteModal>

      <section>Production List Here</section>
    </>
  );
}
