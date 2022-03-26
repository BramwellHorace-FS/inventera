import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { getMaterials } from '../../redux/features/materials/materialsSlice';
import useValidate from '../../hooks';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import MaterialForm from '../../components/forms/materials';
import MaterialsList from '../../components/list/materials';

export default function Materials() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { validated, handleSubmit } = useValidate();

  const materials = useSelector((state) => state.materials.materials);
  const status = useSelector((state) => state.materials.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMaterials());
  }, [dispatch]);

  return (
    <>
      <PageHeader>
        <Container>
          <Row>
            <Col sm={10}>
              <h2>Materials</h2>
            </Col>
            <Col sm={2} className="d-flex justify-content-end">
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
        <Row>
          <Col sm={12}>
            <MaterialsList materials={materials} status={status} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
