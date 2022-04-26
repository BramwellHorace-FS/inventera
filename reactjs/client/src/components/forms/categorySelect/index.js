import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

function CategorySelect() {
  const { categories } = useSelector((state) => state.category);

  return (
    <>
      {/* Select form */}
      <Form.Group>
        <Form.Label className="text-muted h6">Category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          defaultValue="Select Category"
        >
          <option value="Select Category">Select Category</option>
          {categories &&
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </>
  );
}

export default CategorySelect;
