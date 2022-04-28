import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import { toast } from 'react-toastify';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import SiteModal from '../../components/modal';
import ProductionModal from '../../components/productionModal';
import ProductionForm from '../../components/forms/productions';
import ProductionBoard from '../../components/cards/board';
import { productionData } from '../../formDefaults';
import {
  deleteProduction,
  updateProduction,
  setProduction,
  createProduction,
  reset,
} from '../../redux/features/production/productionSlice';
import styles from './styles.module.css';

export default function Productions() {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
  const [formData, setFormData] = useState(productionData);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleView = () => setView(true);
  const handleCloseView = () => setView(false);

  const { user } = useSelector((state) => state.auth);
  const { boards } = useSelector((state) => state.board);
  // const { products } = useSelector((state) => state.product);
  const { productions, production, error, success, loading, message } =
    useSelector((state) => state.production);

  const { token } = user;

  /* HANDLE CHANGE */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* HANDLE EDIT */
  const handleEdit = (id) => {
    const prod = productions.find((p) => p.id === id);

    setFormData({
      id: prod.id,
      name: prod.name,
      dueDate: new Date(prod.dueDate).toISOString().substr(0, 10),
      quantity: prod.quantity,
      status: prod.productionBoardId,
      notes: '',
      product: '',
    });

    handleShow();
  };

  /* HANDLE VIEW */
  const viewProduction = (id) => {
    handleView();
    const prod = productions.find((p) => p.id === id);
    const statusId = boards.find((b) => b.id === prod.productionBoardId);
    const p = {
      id: prod.id,
      name: prod.name,
      dueDate: new Date(prod.dueDate).toLocaleDateString(),
      quantity: prod.quantity,
      status: statusId.name,
      statusId: prod.status,
      notes: prod.notes ? prod.notes : '',
    };

    dispatch(setProduction(p));
  };

  /* HANDLE UPDATE */
  const handleUpdate = (e) => {
    // const { id } = production;
    // const data = {
    //   token,
    //   productionId: id,
    //   production: {
    //     ...formData,
    //     productionBoardId: formData.status,
    //   },
    // };
    // dispatch(updateProduction(data));
  };

  /* HANDLE DELETE */
  const handleDelete = (id) => {
    console.log(id);
    // const { id } = production;
    // const data = {
    //   productionId: id,
    //   token,
    // };
    // dispatch(deleteProduction(data));
  };

  /* HANDLE CREATE */
  const handleCreate = () => {
    const data = {
      production: {
        ...formData,
        productionBoardId: formData.status,
      },
      token,
    };

    dispatch(createProduction(data));
  };

  /* HANDLE SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      // check if production with the same id exists
      const productionExists = productions.find(
        (prod) => prod.id === formData.id,
      );

      if (productionExists) {
        handleUpdate();
      } else {
        handleCreate();
      }
    }
  };

  /* DISPLAY MESSAGES */
  useEffect(() => {
    if (error && message) {
      toast.error(message);
      dispatch(reset());
    }

    if (success && message) {
      toast.success(message);
      dispatch(reset());
      handleClose();
      setFormData({ ...productionData });
    }
  }, [error, success, message, dispatch]);

  return (
    <>
      {/* PAGE HEADER */}
      <PageHeader>
        <Container>
          <Row>
            <Col sm={6}>
              <h2>Productions</h2>
            </Col>
            <Col sm={6} className="d-flex justify-content-end">
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Add Production
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </PageHeader>

      {/* PRODUCTION BOARD */}
      <Container className={styles.boards}>
        {boards &&
          boards.map((board) => (
            <ProductionBoard
              key={board.id}
              title={board.name}
              handleView={viewProduction}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              items={productions.filter(
                (prod) => prod.productionBoardId === board.id,
              )}
            />
          ))}
      </Container>

      {/* FORM MODAL */}
      <SiteModal
        show={show}
        handleClose={handleClose}
        modalTitle={formData.id ? 'Edit Production' : 'Add Production'}
      >
        {/* FORM */}
        <ProductionForm
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          validated={validated}
        />
      </SiteModal>

      {/* PRODUCTION MODAL  */}
      <ProductionModal
        show={view}
        handleClose={handleCloseView}
        production={production}
      />
    </>
  );
}
