import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Spinner, Form, Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import SiteModal from '../../modal';
import MaterialForm from '../../forms/materials';
import {
  getMaterials,
  getMaterial,
  updateMaterial,
  createMaterial,
  deleteMaterial,
} from '../../../redux/features/material/materialSlice';

export default function MaterialList({ handleShow, show, handleClose }) {
  const [materialsChecked, setMaterialsChecked] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    stock: '',
    minStock: '',
    unitCost: '',
    unit: '',
    category: '',
    supplier: '',
    sku: '',
    lastOrdered: '',
  });

  const { materials, material, error } = useSelector((state) => state.material);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // Handle checked materials
  const handleChecked = (e, id) => {
    const checkedMaterials = [...materialsChecked];

    if (e.target.checked) {
      checkedMaterials.push(id);
    } else {
      checkedMaterials.splice(checkedMaterials.indexOf(id), 1);
    }

    setMaterialsChecked(checkedMaterials);
  };

  // Handle edit material
  const handleEdit = () => {
    handleShow();
    const checkedMaterials = [...materialsChecked];

    if (checkedMaterials.length === 1) {
      const id = checkedMaterials[0];
      const { token } = user;
      const data = {
        materialId: id,
        token,
      };

      dispatch(getMaterial(data));
    }
  };

  // Handle delete material
  const handleDelete = () => {
    const checkedMaterials = [...materialsChecked];

    checkedMaterials.forEach((id) => {
      const { token } = user;
      const data = {
        materialId: id,
        token,
      };

      dispatch(deleteMaterial(data));
    });

    dispatch(getMaterials(user.token));

    setMaterialsChecked([]);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkedMaterials = [...materialsChecked];

    if (checkedMaterials.length === 1) {
      const id = checkedMaterials[0];
      const { token } = user;
      const data = {
        materialId: id,
        token,
      };

      // update
      dispatch(updateMaterial(data));
    } else {
      // create
      const { token } = user;
      const data = {
        material: formData,
        token,
      };

      dispatch(createMaterial(data));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  useEffect(() => {
    console.log(material);
    console.log(error);
    console.log(materials);
  }, [material, dispatch, error, materials]);

  return (
    <>
      {/* Buttons to edit and delete materials */}
      {materialsChecked.length > 0 && (
        <ButtonGroup className="mt-3">
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          {materialsChecked.length === 1 && (
            <Button variant="outline-dark" onClick={handleEdit}>
              Edit
            </Button>
          )}
        </ButtonGroup>
      )}
      {/* Material list table */}

      <Table responsive className="nowrap">
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Min. Stock</th>
            <th>Unit Cost</th>
            <th>SKU</th>
            <th>Supplier</th>
            <th>Category</th>
            <th>Last Ordered</th>
          </tr>
        </thead>
        <tbody>
          {!materials.length && (
            <tr>
              <td colSpan="8">
                <Spinner animation="border" variant="primary" />
              </td>
            </tr>
          )}
          {/* List Materials if found */}
          {materials.map((mat) => (
            <tr key={mat.id}>
              <td>
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    onChange={(e) => handleChecked(e, mat.id)}
                  />
                  <Form.Check.Label>{mat.name}</Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                {mat.stock} {mat.unit.abbr}
              </td>
              <td>
                {mat.minStock} {mat.unit.abbr}
              </td>
              <td>$ {mat.unitCost}</td>
              <td>{mat.sku}</td>
              <td>{mat.supplier.name}</td>
              <td>{mat.category.name}</td>
              <td>{mat.lastOrdered}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Material form modal to edit materials */}
      <SiteModal
        show={show}
        handleClose={handleClose}
        modalTitle={
          materialsChecked.length === 1 ? 'Edit Material' : 'Add Material'
        }
      >
        <MaterialForm
          handleClose={handleClose}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      </SiteModal>
    </>
  );
}

// PropTypes
MaterialList.propTypes = {
  handleShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
