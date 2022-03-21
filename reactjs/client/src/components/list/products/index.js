import { Form, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProductList({ products }) {
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
              <td>${product.unitCost}</td>
              <td>{product.sku}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Form>
  );
}

ProductList.defaultProps = {
  products: [
    {
      id: 1,
      name: '14 oz Candle',
      stockLevel: 30,
      minLevel: 5,
      unitCost: 1.5,
      unitType: 'pcs',
      sku: 'CAND-14',
      category: 'Candles',
    },
    {
      id: 2,
      name: '9 oz Candle',
      stockLevel: 30,
      minLevel: 5,
      unitCost: 1.12,
      unitType: 'pcs',
      sku: 'CAND-9',
      category: 'Candles',
    },
  ],
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      stockLevel: PropTypes.number.isRequired,
      minLevel: PropTypes.number.isRequired,
      unitCost: PropTypes.number.isRequired,
      unitType: PropTypes.string.isRequired,
      sku: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ),
};
