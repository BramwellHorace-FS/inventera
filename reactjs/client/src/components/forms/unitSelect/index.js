import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function UnitSelect({ defaultValue }) {
  const { units } = useSelector((state) => state.unit);

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
        {units &&
          units.map((unit) => (
            <option key={unit.id} value={unit.name}>
              {unit.name} ({unit.abbr})
            </option>
          ))}
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
