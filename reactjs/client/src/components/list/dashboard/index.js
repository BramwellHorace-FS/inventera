import { Form, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function MiniList({ data }) {
  return (
    <Form>
      <Table responsive>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.unitCost}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Form>
  );
}

MiniList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
