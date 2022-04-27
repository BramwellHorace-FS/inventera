import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import { toast } from 'react-toastify';
import PrimaryButton from '../../components/buttons/primary';
import PageHeader from '../../components/header';
import validateForm from '../../utils/validateForm';
import SiteModal from '../../components/modal';
import MaterialForm from '../../components/forms/materials';
import MaterialTable from '../../components/tables/material';
import {
  deleteMaterial,
  getMaterials,
  getMaterial,
  updateMaterial,
  createMaterial,
} from '../../redux/features/material/materialSlice';
import vars from '../../variables';

export default function Materials() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);
  const [formData, setFormData] = useState(vars.formData);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { materials, material, error } = useSelector((state) => state.material);
  const { user } = useSelector((state) => state.auth);

  const { token } = user;

  /* HANDLE CHANGE */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* HANDLE DELETE */
  const handleDelete = () => {
    const materialsToDelete = [...selected];

    // if materials selected, loop through and delete
    if (materialsToDelete.length > 0) {
      materialsToDelete.forEach((mat) => {
        const data = {
          materialId: mat.id,
          token,
        };

        dispatch(deleteMaterial(data));
      });

      // delete selected materials
      dispatch(getMaterials(token));

      // reset selected
      setSelected([]);

      // show successful message
      toast.success('Material(s) deleted successfully.');
    }
  };

  /* HANDLE EDIT */
  const handleEdit = () => {
    handleShow();
    setFormData({
      ...material,
      unit: material.unit.id,
      category: material.category.id,
      supplier: material.supplier.id,
    });
  };

  /* HANDLE SELECT */
  const handleSelect = (e, id) => {
    const selectedMaterials = [...selected];

    // if selected, add to selected array. if not, remove from array
    if (e.target.checked) {
      selectedMaterials.push(id);
    } else {
      selectedMaterials.splice(selectedMaterials.indexOf(id), 1);
    }

    setSelected(selectedMaterials);
  };

  /* HANDLE CREATE */
  const handleCreate = (date) => {
    const data = {
      ...formData,
      lastOrdered: date.toISOString(),
      token,
    };

    dispatch(createMaterial(data));

    // reset form
    setFormData({});

    // close modal
    handleClose();

    // show successful message
    toast.success('Material created successfully.');

    // get materials
    dispatch(getMaterials(token));
  };

  /* HANDLE UPDATE */
  const handleUpdate = (date) => {
    const id = selected[0];

    // create data object to send to redux
    const data = {
      token,
      materialId: id,
      material: {
        ...formData,
        lastOrdered: date.toISOString(),
      },
    };

    // update material
    dispatch(updateMaterial(data));

    // reset form
    setFormData({});

    // close modal
    handleClose();

    // show successful message
    toast.success('Material updated successfully.');

    // update material list
    dispatch(getMaterials(token));
  };

  /* HANDLE SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedMaterials = [...selected];

    let lastOrdered;

    if (formData.lastOrdered) {
      lastOrdered = new Date(formData.lastOrdered);
    }

    if (selectedMaterials.length === 1) {
      handleUpdate(lastOrdered);
    } else {
      handleCreate(lastOrdered);
    }

    // validate form
    validateForm(e, setValidated);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (selected && selected.length === 1) {
      const id = selected[0];
      const data = {
        materialId: id,
        token,
      };
      dispatch(getMaterial(data));
    }
  }, [error, dispatch, selected, token]);

  return (
    <>
      <PageHeader>
        <Container>
          <Row>
            <Col sm={6}>
              <h2>Materials</h2>
            </Col>
            <Col sm={6} className="d-flex justify-content-end">
              <PrimaryButton onClick={handleShow}>
                <BsPlusLg />
                Add Material
              </PrimaryButton>
            </Col>
          </Row>
        </Container>
      </PageHeader>

      <Container className="mt-3">
        {selected.length > 0 && (
          <ButtonGroup className="mt-3">
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            {selected.length === 1 && (
              <Button variant="outline-dark" onClick={handleEdit}>
                Edit
              </Button>
            )}
          </ButtonGroup>
        )}
        <MaterialTable materials={materials} handleSelect={handleSelect} />

        <SiteModal
          show={show}
          handleClose={handleClose}
          modalTitle={selected.length === 1 ? 'Edit Material' : 'Add Material'}
        >
          <MaterialForm
            handleClose={handleClose}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
            validated={validated}
          />
        </SiteModal>
      </Container>
    </>
  );
}
