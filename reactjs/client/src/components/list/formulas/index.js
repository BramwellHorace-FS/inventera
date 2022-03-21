import { Form, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function FormulaList({ formulas }) {
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
          {formulas.map((formula) => (
            <tr key={formula.id}>
              <td>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>{formula.name}</Form.Check.Label>
                </Form.Check>
              </td>
              <td>{formula.containerFill}</td>
              <td>{formula.fragranceLoad}</td>
              <td>{formula.waxAmount}</td>
              <td>{formula.notes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Form>
  );
}

FormulaList.defaultProps = {
  formulas: [
    {
      id: 1,
      name: '14 oz Candle',
      containerFill: '12 oz',
      fragranceLoad: '1.38 oz',
      waxAmount: '10 oz',
      notes: "Doesn't account for enhancements such as dyes or glitter",
    },
    {
      id: 2,
      name: '9 oz Candle',
      containerFill: '9 oz',
      fragranceLoad: '1.25 oz',
      waxAmount: '7.5 oz',
      notes: "Doesn't account for enhancements such as dyes or glitter",
    },
  ],
};

FormulaList.propTypes = {
  formulas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      containerFill: PropTypes.string.isRequired,
      fragranceLoad: PropTypes.string.isRequired,
      waxAmount: PropTypes.string.isRequired,
      notes: PropTypes.string.isRequired,
    }),
  ),
};
