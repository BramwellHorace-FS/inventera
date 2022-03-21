import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import useValidate from '../../hooks';
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

  const { validated, handleSubmit } = useValidate();
  const boards = {
    1: {
      title: 'To Do',
      items: [
        {
          name: 'Candles',
          dueDate: '2020-01-01',
          itemCount: 1,
          itemUnit: 'pcs',
        },
      ],
    },
    2: {
      title: 'In Progress',
      items: null,
    },
    3: {
      title: 'Done',
      items: null,
    },
  };

  return (
    <>
      <PageHeader>
        <Container>
          <Row>
            <Col sm={10}>
              <h2>Productions</h2>
            </Col>
            <Col sm={2} className="d-flex justify-content-end">
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

      <Container className={styles.boards}>
        {Object.keys(boards).map((key) => (
          <ProductionBoard
            key={key}
            title={boards[key].title}
            items={boards[key].items}
          />
        ))}
      </Container>
    </>
  );
}
