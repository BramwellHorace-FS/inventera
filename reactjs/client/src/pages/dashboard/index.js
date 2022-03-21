import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg, BsArrowRight } from 'react-icons/bs';
import useValidate from '../../hooks';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import MaterialForm from '../../components/forms/materials';
import DashboardCard from '../../components/cards/dashboard';
import MiniList from '../../components/list/dashboard';
import styles from './styles.module.css';
import { materials, products } from '../../data';

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

      <Container className="mt-5">
        <h2 className="mb-5">Inventory Breakdown</h2>
        <Row>
          <Col sm={6}>
            <Container className="ps-0">
              <h4 className="mb-3">Materials</h4>
              <MiniList data={products} />
              <Link
                className="d-flex justify-content-end align-items-center gap-2"
                to="/materials"
              >
                View All Materials <BsArrowRight />
              </Link>
            </Container>
          </Col>
          <Col sm={6}>
            <Container className="pe-0">
              <h4 className="mb-3">Products</h4>
              <MiniList data={materials} />
              <Link
                className="d-flex justify-content-end align-items-center gap-2"
                to="/products"
              >
                View All Products <BsArrowRight />
              </Link>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
