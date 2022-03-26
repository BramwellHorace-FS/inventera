import { Form, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function MiniList({ name, price }) {
  return (
    <Form>
      <Table responsive>
        <tbody>
          <tr>
            <td>{name}</td>
            <td className="d-flex justify-content-end">${price}</td>
          </tr>
        </tbody>
      </Table>
    </Form>
  );
}

MiniList.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
