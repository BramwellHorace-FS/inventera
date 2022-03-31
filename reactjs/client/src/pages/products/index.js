import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/features/products/productsSlice';
import useValidate from '../../hooks';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import ProductForm from '../../components/forms/products';
import ProductList from '../../components/list/products';
// import { products } from '../../data';

export default function Products() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { validated, handleSubmit } = useValidate();

  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <PageHeader>
        <Container>
          <Row>
            <Col sm={9}>
              <h2>Products</h2>
            </Col>
            <Col sm={3} className="d-flex justify-content-end">
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Add Product
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </PageHeader>
      <SiteModal show={show} handleClose={handleClose} modalTitle="Add Product">
        <ProductForm
          handleClose={handleClose}
          validated={validated}
          handleSubmit={handleSubmit}
        />
      </SiteModal>

      <Container className="mt-5">
        <Row>
          <Col sm={12}>
            <ProductList products={products} status={productStatus} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
