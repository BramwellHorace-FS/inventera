import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg, BsArrowRight } from 'react-icons/bs';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import MaterialForm from '../../components/forms/materials';
import DashboardCard from '../../components/cards/dashboard';
import MiniList from '../../components/list/dashboard';
import styles from './styles.module.css';

export default function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { materials } = useSelector((state) => state.material);

  return (
    <>
      <PageHeader>
        <Container>
          <Row>
            <Col sm={7}>
              <h2>Dashboard</h2>
            </Col>

            <Col sm={5} className="d-flex justify-content-end">
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
        <MaterialForm handleClose={handleClose} />
      </SiteModal>

      <Container className="mt-5">
        <Row className={styles.row}>
          <Col sm={12} lg={3}>
            <DashboardCard
              title="Materials"
              itemCount={materials && materials.length}
              linkTo="/materials"
            />
          </Col>
          <Col sm={12} lg={3}>
            <DashboardCard title="Products" itemCount="0" linkTo="/products" />
          </Col>

          <Col sm={12} lg={3}>
            <DashboardCard
              title="Productions"
              itemCount="0"
              linkTo="/products"
            />
          </Col>

          <Col sm={12} lg={3}>
            <DashboardCard title="Formulas" itemCount="0" linkTo="/products" />
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="mb-3">Inventory Breakdown</h2>
        <Row>
          <Col sm={6}>
            <Container className="ps-0 mt-3">
              <h4 className="mb-3">Materials</h4>
              <MiniList name="" stock={0} unit="" minStock={0} />
              <Link
                className="d-flex justify-content-end align-items-center gap-2"
                to="/materials"
              >
                View All Materials <BsArrowRight />
              </Link>
            </Container>
          </Col>
          <Col sm={6}>
            <Container className="p-0 mt-3">
              <h4 className="mb-3">Products</h4>
              <MiniList name="" stock={0} unit="" minStock={0} />
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
