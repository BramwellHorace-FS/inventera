import React, { useState } from 'react';
import { Table, Form, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function MaterialTable({
  materials,
  handleSelect,
  loading,
  success,
}) {
  const [colors] = useState(['red', 'blue', 'green', 'yellow']);

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
        {loading && (
          <tr>
            <td colSpan={materials.length}>
              <Spinner animation="border" variant="primary" />
            </td>
          </tr>
        )}

        {/* If no materials are found */}
        {success && Object.keys(materials).length === 0 && (
          <tr>
            <p className="mt-3">No materials found.</p>
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
                  <Form.Check.Label>
                    <span
                      className={
                        Number(material.stock) < Number(material.minStock)
                          ? 'text-danger'
                          : ''
                      }
                    >
                      {material.name}
                    </span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                <span
                  className={
                    Number(material.stock) < Number(material.minStock)
                      ? 'text-danger'
                      : ''
                  }
                >
                  {material.stock} {material.unit.abbr}
                </span>
              </td>
              <td>
                <span
                  className={
                    Number(material.stock) < Number(material.minStock)
                      ? 'text-danger'
                      : ''
                  }
                >
                  {material.minStock} {material.unit.abbr}
                </span>
              </td>
              <td>$ {Number(material.unitCost).toFixed(2)}</td>
              <td>{material.sku}</td>
              <td>{material.supplier.name}</td>
              <td>
                <span
                  className={`badge badge-${
                    material.category.name.length === 4
                      ? colors[0]
                      : material.category.name.length === 5
                      ? colors[1]
                      : material.category.name.length === 6
                      ? colors[2]
                      : material.category.name.length >= 7
                      ? colors[3]
                      : 'secondary'
                  }`}
                >
                  {material.category.name}
                </span>
              </td>
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
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
};
