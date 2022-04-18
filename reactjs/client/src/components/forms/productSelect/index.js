import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ProductSelect({ defaultValue }) {
  return (
    <>
      <Form.Select
        required
        name="product"
        defaultValue={defaultValue}
        arial-label="Select a product"
        className="mt-3"
      >
        <option value="">Select product</option>
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        Please select a product to make.
      </Form.Control.Feedback>
    </>
  );
}

export default ProductSelect;

// PropTypes
ProductSelect.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};
