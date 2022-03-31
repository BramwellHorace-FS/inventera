import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg, BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getMaterials } from '../../redux/features/materials/materialsSlice';
import { getProducts } from '../../redux/features/products/productsSlice';
import { getProductions } from '../../redux/features/productions/productionsSlice';
import { getFormulas } from '../../redux/features/formulas/formulasSlice';
import useValidate from '../../hooks';
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

  const { validated, handleSubmit } = useValidate();

  const materials = useSelector((state) => state.materials.materials);
  const materialStatus = useSelector((state) => state.materials.status);

  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);

  const productions = useSelector((state) => state.productions.productions);
  const formulas = useSelector((state) => state.formulas.formulas);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMaterials());
    dispatch(getProducts());
    dispatch(getProductions());
    dispatch(getFormulas());
  }, [dispatch]);

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
        <MaterialForm
          handleClose={handleClose}
          validated={validated}
          handleSubmit={handleSubmit}
        />
      </SiteModal>

      <Container className="mt-5">
        <Row className={styles.row}>
          <Col sm={12} lg={3}>
            <DashboardCard
              title="Materials"
              itemCount={materials.length}
              linkTo="/materials"
            />
          </Col>
          <Col sm={12} lg={3}>
            <DashboardCard
              title="Products"
              itemCount={products.length}
              linkTo="/products"
            />
          </Col>

          <Col sm={12} lg={3}>
            <DashboardCard
              title="Productions"
              itemCount={productions.length}
              linkTo="/products"
            />
          </Col>

          <Col sm={12} lg={3}>
            <DashboardCard
              title="Formulas"
              itemCount={formulas.length}
              linkTo="/products"
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
              {materialStatus === 'loading' && <p>Loading...</p>}
              {materialStatus === 'error' && <p>Error!</p>}
              {materialStatus === 'success' &&
                materials.length > 0 &&
                materials.map((material) => (
                  <MiniList
                    key={material.id}
                    name={material.name}
                    stock={material.stockLevel}
                    minStock={material.minLevel}
                    unit={material.unitType}
                  />
                ))}

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
              {productStatus === 'loading' && <p>Loading...</p>}
              {productStatus === 'error' && <p>Error!</p>}
              {productStatus === 'success' &&
                products.length > 0 &&
                products.map((product) => (
                  <MiniList
                    key={product.id}
                    name={product.name}
                    stock={product.stockLevel}
                    minStock={product.minLevel}
                    unit={product.unitType}
                  />
                ))}
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
