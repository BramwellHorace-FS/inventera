import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import FormulaForm from '../../components/forms/formulas';
import FormulasList from '../../components/list/formulas';

export default function Forumulas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <PageHeader>
        <Container>
          <Row>
            <Col sm={9}>
              <h2>Formulas</h2>
            </Col>
            <Col sm={3} className="d-flex justify-content-end">
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Add Formula
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </PageHeader>

      <SiteModal show={show} handleClose={handleClose} modalTitle="Add Formula">
        <FormulaForm handleClose={handleClose} />
      </SiteModal>

      <Container className="mt-5">
        <Row>
          <Col sm={12}>
            <FormulasList />
          </Col>
        </Row>
      </Container>
    </>
  );
}
