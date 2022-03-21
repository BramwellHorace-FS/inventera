import { Form, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function MaterialList({ products }) {
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
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>{product.name}</Form.Check.Label>
                </Form.Check>
              </td>
              <td>{product.name}</td>
              <td>{product.stockLevel}</td>
              <td>{product.minLevel}</td>
              <td>{product.unitCost}</td>
              <td>{product.sku}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Form>
  );
}

MaterialList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
