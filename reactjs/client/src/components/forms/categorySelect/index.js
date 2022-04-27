import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CategorySelect({ defaultValue }) {
  const { categories } = useSelector((state) => state.category);

  return (
    <>
      {/* Select form */}
      <Form.Label className="text-muted h6">
        Category <span className="text-danger">*</span>
      </Form.Label>
      <Form.Select name="categoryId" defaultValue={defaultValue} required>
        <option value="">Select Category </option>
        {categories &&
          categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
      </Form.Select>
    </>
  );
}

export default CategorySelect;

CategorySelect.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};
