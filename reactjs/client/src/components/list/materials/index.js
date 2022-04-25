import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Table, Spinner, Form, Button, ButtonGroup } from 'react-bootstrap';

export default function MaterialList() {
  const [materialsChecked, setMaterialsChecked] = useState([]);

  const { materials } = useSelector((state) => state.material);

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

  useEffect(() => {
    console.log(materialsChecked);
  }, [materialsChecked]);

  return (
    <>
      {/* Buttons to edit and delete materials */}
      {materialsChecked.length > 0 && (
        <ButtonGroup className="mt-3">
          <Button variant="danger"> Delete </Button>
          {materialsChecked.length === 1 && (
            <Button variant="outline-dark"> Edit </Button>
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
          {materials.map((material) => (
            <tr key={material.id}>
              <td>
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    onChange={(e) => handleChecked(e, material.id)}
                  />
                  <Form.Check.Label>{material.name}</Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                {material.stock} {material.unit.abbr}
              </td>
              <td>
                {material.minStock} {material.unit.abbr}
              </td>
              <td>$ {material.unitCost}</td>
              <td>{material.sku}</td>
              <td>{material.supplier.name}</td>
              <td>{material.category.name}</td>
              <td>{material.lastOrdered}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
