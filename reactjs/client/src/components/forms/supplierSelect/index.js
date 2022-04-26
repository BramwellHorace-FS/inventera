import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

export default function SupplierSelect() {
  const { suppliers } = useSelector((state) => state.supplier);

  return (
    <>
      {/* Select form */}
      <Form.Label className="text-muted h6">Supplier</Form.Label>
      <Form.Select name="supplierId" defaultValue="Select Supplier">
        <option value="Select Supplier">Select Supplier</option>
        {suppliers &&
          suppliers.map((supplier) => (
            <option key={supplier.id} value={supplier.id}>
              {supplier.name}
            </option>
          ))}
      </Form.Select>
    </>
  );
}
