import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import useValidate from '../../hooks';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import ProductForm from '../../components/forms/products';

export default function Products() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { validated, handleSubmit } = useValidate();

  return (
    <>
      <PageHeader>
        <Container fluid>
          <Row>
            <Col>
              <h2>Products</h2>
            </Col>
            <Col>
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Add Product
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </PageHeader>
      <SiteModal show={show} onHide={handleClose}>
        <ProductForm
          handleClose={handleClose}
          validated={validated}
          handleSubmit={handleSubmit}
        />
      </SiteModal>

      <section>Product List Here</section>
    </>
  );
}
