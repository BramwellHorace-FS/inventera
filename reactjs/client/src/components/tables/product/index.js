import React, { useState } from 'react';
import { Table, Form, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProductTable({
  products,
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
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {loading && (
          <tr>
            <td colSpan={products.length}>
              <Spinner animation="border" variant="primary" />
            </td>
          </tr>
        )}

        {/* If no products are found */}
        {success && Object.keys(products).length === 0 && (
          <tr>
            <p className="mt-3">No products found.</p>
          </tr>
        )}

        {/* List Products if found */}
        {products &&
          products.map((product) => (
            <tr key={product.id}>
              <td>
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    onChange={(e) => handleSelect(e, product.id)}
                  />
                  <Form.Check.Label>
                    <span
                      className={
                        Number(product.stock) < Number(product.minStock)
                          ? 'text-danger'
                          : ''
                      }
                    >
                      {product.name}
                    </span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                <span
                  className={
                    Number(product.stock) < Number(product.minStock)
                      ? 'text-danger'
                      : ''
                  }
                >
                  {product.stock}
                </span>
              </td>
              <td>
                <span
                  className={
                    Number(product.stock) < Number(product.minStock)
                      ? 'text-danger'
                      : ''
                  }
                >
                  {product.minStock}
                </span>
              </td>
              <td>{product.unitCost}</td>
              <td>{product.sku}</td>
              <td>
                <span
                  className={
                    product.category.name.length === 4
                      ? colors[0]
                      : product.category.name.length === 5
                      ? colors[1]
                      : product.category.name.length === 6
                      ? colors[2]
                      : product.category.name.length >= 7
                      ? colors[3]
                      : ''
                  }
                >
                  {product.category}
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

// PropTypes
ProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleSelect: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
};
