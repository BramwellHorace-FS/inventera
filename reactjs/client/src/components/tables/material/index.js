import React from 'react';
import { Table, Form, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function MaterialTable({ materials, handleSelect }) {
  return (
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
            <td colSpan={materials.length}>
              <Spinner animation="border" variant="primary" />
            </td>
          </tr>
        )}

        {/* List Materials if found */}
        {materials &&
          materials.map((material) => (
            <tr key={material.id}>
              <td>
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    onChange={(e) => handleSelect(e, material.id)}
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
  );
}

// PropTypes
MaterialTable.propTypes = {
  materials: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleSelect: PropTypes.func.isRequired,
};
