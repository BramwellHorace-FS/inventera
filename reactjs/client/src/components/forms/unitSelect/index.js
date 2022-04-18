import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function UnitSelect({ defaultValue }) {
  return (
    <>
      <Form.Label className="text-muted h6 mt-3">Unit Type</Form.Label>
      <Form.Select
        name="unit"
        placeholder="Select Unit Type"
        aria-label="Default select example"
        required
        defaultValue={defaultValue}
      >
        <option value="">Select Unit Type</option>
        <option value="oz">Ounces (oz)</option>
        <option value="kg">Kilograms (kg)</option>
        <option value="g">Grams (g)</option>
        <option value="l">Liters (l)</option>
        <option value="ml">Milliliters (ml)</option>
        <option value="piece">Pieces</option>
        <option value="lb">Pounds (lb)</option>
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        Please select a unit type.
      </Form.Control.Feedback>
    </>
  );
}

export default UnitSelect;

// PropTypes
UnitSelect.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};
