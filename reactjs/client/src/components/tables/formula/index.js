import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Form, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function FormulaTable({ handleSelect }) {
  const { formulas, loading, success } = useSelector((state) => state.formula);

  return (
    <Table responsive className="nowrap">
      <thead>
        <tr>
          <th>Name</th>
          <th>Container Fill</th>
          <th>Fragrance Load</th>
          <th>Wax Weight</th>
          <th> Notes</th>
        </tr>
      </thead>
      <tbody>
        {loading && formulas && (
          <tr>
            <td colSpan={formulas.length}>
              <Spinner animation="border" variant="primary" />
            </td>
          </tr>
        )}

        {/* If no formulas are found */}
        {success && formulas && Object.keys(formulas).length === 0 && (
          <tr>
            <p className="mt-3">No formulas found.</p>
          </tr>
        )}

        {/* List formulas if found */}
        {formulas && Object.keys(formulas).length > 0 && (
          <>
            {formulas.map((formula) => (
              <tr key={formula.id}>
                <td>
                  <Form.Check type="checkbox">
                    <Form.Check.Input
                      onChange={(e) => handleSelect(e, formula.id)}
                    />
                    <Form.Check.Label> {formula.name} </Form.Check.Label>
                  </Form.Check>
                </td>
                <td> {formula.containerFill} oz </td>
                <td> {formula.fragranceLoad} oz </td>
                <td> {formula.waxAmount} oz </td>
                <td> {formula.note} </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </Table>
  );
}

/* PROP TYPES */
FormulaTable.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};
