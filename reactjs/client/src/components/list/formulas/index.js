import { Form, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function MaterialList({ formulas }) {
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

MaterialList.propTypes = {
  formulas: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
