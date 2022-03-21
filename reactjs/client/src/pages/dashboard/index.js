import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import useValidate from '../../hooks';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import MaterialForm from '../../components/forms/materials';
import DashboardCard from '../../components/cards/dashboard';
import styles from './styles.module.css';

export default function Dashboard() {
  const [show, setShow] = useState(false);
  const [data] = useState({
    1: {
      title: 'Raw Materials',
      itemCount: 10,
    },
    2: {
      title: 'Total Products',
      itemCount: 3,
    },
    3: {
      title: 'In Production',
      itemCount: 1,
    },
    4: {
      title: 'Formulas',
      itemCount: 2,
    },
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { validated, handleSubmit } = useValidate();

  return (
    <>
      <PageHeader>
        <Container>
          <Row>
            <Col sm={8}>
              <h2>Dashboard</h2>
            </Col>

            <Col sm={4} className="d-flex justify-content-end">
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Add Material
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </PageHeader>
      <SiteModal
        show={show}
        handleClose={handleClose}
        modalTitle="Add Material"
      >
        <MaterialForm
          handleClose={handleClose}
          validated={validated}
          handleSubmit={handleSubmit}
        />
      </SiteModal>

      <Container className={styles.cards}>
        {Object.keys(data).map((key) => (
          <div className="w-100 h-100 bg-light py-5" key={key}>
            <DashboardCard
              title={data[key].title}
              itemCount={data[key].itemCount}
            />
          </div>
        ))}
      </Container>
    </>
  );
}
