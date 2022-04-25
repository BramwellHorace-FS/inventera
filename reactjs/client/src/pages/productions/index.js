import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';

import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import ProductionForm from '../../components/forms/productions';
import ProductionBoard from '../../components/cards/board';
import styles from './styles.module.css';

export default function Productions() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <PageHeader>
        <Container>
          <Row>
            <Col sm={6}>
              <h2>Productions</h2>
            </Col>
            <Col sm={6} className="d-flex justify-content-end">
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
        <ProductionForm handleClose={handleClose} />
      </SiteModal>

      <Container className={styles.boards}>
        <ProductionBoard title="To Do" items={[]} />
        <ProductionBoard title="In progress" items={[]} />
        <ProductionBoard title="Completed" items={[]} />
      </Container>
    </>
  );
}
