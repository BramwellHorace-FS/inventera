import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import DashboardCard from '../../components/cards/dashboard';
import MiniList from '../../components/list/dashboard';
import styles from './styles.module.css';

export default function Dashboard() {
  const navigate = useNavigate();

  const { materials } = useSelector((state) => state.material);
  const { products } = useSelector((state) => state.product);
  const { formulas } = useSelector((state) => state.formula);

  return (
    <>
      <PageHeader>
        <Container>
          <Row>
            <Col sm={7}>
              <h2>Dashboard</h2>
            </Col>

            <Col sm={5} className="d-flex justify-content-end">
              <PrimaryButton onClick={() => navigate('/materials')}>
                View Inventory
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </PageHeader>

      <Container className="mt-5">
        <Row className={styles.row}>
          <Col sm={12} lg={3}>
            <DashboardCard
              title="Materials"
              itemCount={materials ? materials.length : 0}
              linkTo="/materials"
            />
          </Col>
          <Col sm={12} lg={3}>
            <DashboardCard
              title="Products"
              itemCount={products ? products.length : 0}
              linkTo="/products"
            />
          </Col>

          <Col sm={12} lg={3}>
            <DashboardCard
              title="Productions"
              itemCount={0}
              linkTo="/products"
            />
          </Col>

          <Col sm={12} lg={3}>
            <DashboardCard
              title="Formulas"
              itemCount={formulas ? formulas.length : 0}
              linkTo="/formulas"
            />
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="mb-3">Inventory Breakdown</h2>
        <Row>
          <Col sm={6}>
            <Container className="ps-0 mt-3">
              <h4 className="mb-3">Materials</h4>
              {!materials || materials.length === 0 ? (
                <p>No materials found.</p>
              ) : (
                materials &&
                materials.length > 0 &&
                materials.map((material) => (
                  <MiniList
                    key={material.id}
                    stock={Number(material.stock)}
                    unit={material.unit.abbr}
                    minStock={Number(material.minStock)}
                    name={material.name}
                  />
                ))
              )}
              <Link
                className="d-flex justify-content-end align-items-center gap-2"
                to="/materials"
              >
                View All Materials
                <BsArrowRight />
              </Link>
            </Container>
          </Col>
          <Col sm={6}>
            <Container className="p-0 mt-3">
              <h4 className="mb-3">Products</h4>
              {!products || products.length === 0 ? (
                <p>No products found.</p>
              ) : (
                products &&
                products.length > 0 &&
                products.map((product) => (
                  <MiniList
                    key={product.id}
                    stock={Number(product.stock)}
                    unit={product.unit.abbr}
                    minStock={Number(product.minStock)}
                    name={product.name}
                  />
                ))
              )}
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
