import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Spinner, Form, Button, ButtonGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
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
import vars from '../../../variables';

export default function MaterialList({ handleShow, show, handleClose }) {
  const [materialsChecked, setMaterialsChecked] = useState([]);
  const [formData, setFormData] = useState(vars.formData);

  const { materials, error } = useSelector((state) => state.material);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    // if there is an error, show it
    if (error) {
      toast.error(error);
    }
  }, [error]);

  // Method to handle items checked
  const handleChecked = (e, id) => {
    const checkedMaterials = [...materialsChecked];

    // if the material is checked, add it to the array
    // if the material is not checked, remove it from the array
    if (e.target.checked) {
      checkedMaterials.push(id);
    } else {
      checkedMaterials.splice(checkedMaterials.indexOf(id), 1);
    }

    setMaterialsChecked(checkedMaterials);
  };

  // Method to handle edting of a material
  const handleEdit = () => {
    handleShow();

    const checkedMaterials = [...materialsChecked];

    // if there is only one material checked,
    // fetch the material to be edited,
    // and set the form data to the material
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

  // Function to handle the deletion of material(s)
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

    const { token } = user;

    const checkedMaterials = [...materialsChecked];

    // if there is only one material checked,
    // update the material
    if (checkedMaterials.length === 1) {
      const id = checkedMaterials[0];
      const data = {
        materialId: id,
        token,
      };

      dispatch(updateMaterial(data));
    } else {
      // if there is no material checked,
      // create the material
      const lastOrdered = new Date(formData.lastOrdered);

      const data = {
        material: {
          name: formData.name.trim(),
          stock: formData.stock.trim(),
          minStock: formData.minStock.trim(),
          unitCost: formData.unitCost.trim(),
          unit: formData.unit.trim(),
          category: formData.category.trim(),
          supplier: formData.supplier.trim(),
          sku: formData.sku.trim(),
          lastOrdered: lastOrdered.toISOString(),
          categoryId: formData.categoryId,
          supplierId: formData.supplierId,
        },
        token,
      };

      dispatch(createMaterial(data));
    }

    handleClose();
    setFormData(vars.formData);
  };

  // handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
