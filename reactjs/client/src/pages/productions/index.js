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

  const productionBoards = {
    productions: [
      {
        id: 1,
        name: 'To Do',
        items: [
          {
            id: 1,
            name: 'Candle Collection',
            dueDate: '12/31/2019',
            itemCount: '30',
            itemUnit: 'pcs',
          },
          {
            id: 2,
            name: 'Spring Collection',
            dueDate: '12/31/2019',
            itemCount: '52',
            itemUnit: 'pcs',
          },
        ],
      },
      {
        id: 2,
        name: 'In Progress',
        items: [],
      },
      {
        id: 3,
        name: 'Completed',
        items: [],
      },
    ],
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
        {productionBoards.productions.map((board) => (
          <ProductionBoard
            key={board.id}
            title={board.name}
            items={board.items}
          />
        ))}
      </Container>
    </>
  );
}
