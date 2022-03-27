import { Form, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function MaterialList({ materials, status }) {
  return (
    <Table responsive className="noWrap">
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
        {status === 'loading' && (
          <tr>
            <td colSpan="8">Loading...</td>
          </tr>
        )}
        {status === 'error' && (
          <tr>
            <td colSpan="8">Error!</td>
          </tr>
        )}
        {status === 'success' &&
          materials.map((material) => (
            <tr key={material.id}>
              <td>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>
                    {material.stockLevel < material.minLevel ? (
                      <span className="text-danger">{material.name}</span>
                    ) : (
                      material.name
                    )}
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                {material.stockLevel < material.minLevel ? (
                  <span className="text-danger">
                    {material.stockLevel} {material.unitType}
                  </span>
                ) : (
                  <span>
                    {material.stockLevel} {material.unitType}
                  </span>
                )}
              </td>
              <td>
                {material.stockLevel < material.minLevel ? (
                  <span className="text-danger">
                    {material.minLevel} {material.unitType}
                  </span>
                ) : (
                  <span>
                    {material.minLevel} {material.unitType}
                  </span>
                )}
              </td>
              <td>${material.unitPrice}</td>
              <td>{material.sku}</td>
              <td>{material.supplier}</td>
              <td>{material.category}</td>
              <td>{material.lastOrdered}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

MaterialList.propTypes = {
  materials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      stockLevel: PropTypes.number.isRequired,
      minLevel: PropTypes.number.isRequired,
      unitPrice: PropTypes.number.isRequired,
      unitType: PropTypes.string.isRequired,
      sku: PropTypes.string.isRequired,
      supplier: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      lastOrdered: PropTypes.string.isRequired,
    }),
  ).isRequired,
  status: PropTypes.string.isRequired,
};
