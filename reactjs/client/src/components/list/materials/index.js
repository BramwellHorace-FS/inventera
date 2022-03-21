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
              <td>
                {material.stockLevel} {material.unitType}
              </td>
              <td>
                {material.minLevel} {material.unitType}
              </td>
              <td>${material.unitCost}</td>
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

MaterialList.defaultProps = {
  materials: [
    {
      id: 1,
      name: 'coconut wax',
      stockLevel: 10,
      minLevel: 5,
      unitCost: 1.5,
      unitType: 'lb',
      sku: 'COC-WX',
      supplier: 'Wooden Wick',
      category: 'Wax',
      lastOrdered: '2020-01-01',
    },
    {
      id: 2,
      name: 'satin soy wax',
      stockLevel: 5,
      minLevel: 2,
      unitCost: 2.5,
      unitType: 'lb',
      sku: 'SAT-WX',
      supplier: 'Wooden Wick',
      category: 'Wax',
      lastOrdered: '2020-01-01',
    },
  ],
};

MaterialList.propTypes = {
  materials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      stockLevel: PropTypes.number.isRequired,
      minLevel: PropTypes.number.isRequired,
      unitCost: PropTypes.number.isRequired,
      unitType: PropTypes.string.isRequired,
      sku: PropTypes.string.isRequired,
      supplier: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      lastOrdered: PropTypes.string.isRequired,
    }),
  ),
};
