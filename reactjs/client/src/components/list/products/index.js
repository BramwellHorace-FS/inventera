import { Form, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProductList({ products, status }) {
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
            <th>Category</th>
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
          {status === 'success' && (
            <>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Form.Check type="checkbox">
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label>{product.name}</Form.Check.Label>
                    </Form.Check>
                  </td>
                  <td>
                    {product.stockLevel} {product.unitType}
                  </td>
                  <td>
                    {product.minLevel} {product.unitType}
                  </td>
                  <td>${product.unitPrice}</td>
                  <td>{product.sku}</td>
                  <td>{product.category}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </Table>
    </Form>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      stockLevel: PropTypes.number.isRequired,
      minLevel: PropTypes.number.isRequired,
      unitCost: PropTypes.number.isRequired,
      unitType: PropTypes.string.isRequired,
      sku: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  status: PropTypes.string.isRequired,
};
