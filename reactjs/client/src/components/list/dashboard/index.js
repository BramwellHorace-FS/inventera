import { Form, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function MiniList({ products }) {
  return (
    <Form>
      <Table responsive>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td className="d-flex justify-content-end">{product.unitCost}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Form>
  );
}

MiniList.defaultProps = {
  products: [
    {
      id: 1,
      name: '14 oz Candle',
      unitCost: '$1.50',
    },
    {
      id: 2,
      name: '9 oz Candle',
      unitCost: '$1.20',
    },
  ],
};

MiniList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      unitCost: PropTypes.string.isRequired,
    }),
  ),
};
