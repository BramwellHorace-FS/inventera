import { Form, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function FormulaList({ formulas, status }) {
  return (
    <Form>
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Container Fill</th>
            <th>Fragrance Load</th>
            <th>Wax Amount</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {status === 'loading' && (
            <tr>
              <td colSpan="8">Loading...</td>
            </tr>
          )}

          {status === 'error' && (
            <tr>
              <td colSpan="8">Error...</td>
            </tr>
          )}

          {status === 'success' &&
            formulas.map((formula) => (
              <tr key={formula.id}>
                <td>
                  <Form.Check type="checkbox">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>{formula.name}</Form.Check.Label>
                  </Form.Check>
                </td>
                <td>
                  {formula.containerFill}
                  {'  '}
                  {formula.unitType}
                </td>
                <td>
                  {formula.fragranceLoad}
                  {'  '}
                  {formula.unitType}
                </td>
                <td>
                  {formula.waxAmount}
                  {'  '}
                  {formula.unitType}
                </td>
                <td>{formula.notes}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Form>
  );
}

FormulaList.propTypes = {
  formulas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      containerSize: PropTypes.number.isRequired,
      containerFill: PropTypes.number.isRequired,
      fragrancePercentage: PropTypes.number.isRequired,
      fragranceLoad: PropTypes.number.isRequired,
      unitType: PropTypes.string.isRequired,
      waxAmount: PropTypes.number.isRequired,
      notes: PropTypes.string.isRequired,
    }),
  ).isRequired,
  status: PropTypes.string.isRequired,
};
