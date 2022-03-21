import { Form, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function MaterialList({ materials }) {
  return (
    <Form>
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>StockLevel</th>
            <th>MinLevel</th>
            <th>Unit Cost</th>
            <th>SKU</th>
            <th>Supplier</th>
            <th>Category</th>
            <th>Last Ordered</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              <td>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>{material.name}</Form.Check.Label>
                </Form.Check>
              </td>
              <td>{material.stockLevel}</td>
              <td>{material.minLevel}</td>
              <td>{material.unitCost}</td>
              <td>{material.sku}</td>
              <td>{material.supplier}</td>
              <td>{material.category}</td>
              <td>{material.lastOrdered}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Form>
  );
}

MaterialList.propTypes = {
  materials: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
