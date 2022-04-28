import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Table, Form, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProductTable({ handleSelect }) {
  const [colors] = useState(['red', 'blue', 'green', 'yellow']);

  const { products, loading, success } = useSelector((state) => state.product);

  return (
    <Table responsive className="nowrap">
      <thead>
        <tr>
          <th>Name</th>
          <th>Stock</th>
          <th>Min. Stock</th>
          <th>Unit Cost</th>
          <th>SKU</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {loading && (
          <tr>
            <td colSpan={products.length}>
              <Spinner animation="border" variant="primary" />
            </td>
          </tr>
        )}

        {/* If no products are found */}
        {success && Object.keys(products).length === 0 && (
          <tr>
            <p className="mt-3">No products found. Try adding a product.</p>
          </tr>
        )}

        {/* List Products if found */}
        {products &&
          products.map((product) => (
            <tr key={product.id}>
              <td>
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    onChange={(e) => handleSelect(e, product.id)}
                  />
                  <Form.Check.Label>
                    <span
                      className={
                        Number(product.stock) < Number(product.minStock)
                          ? 'text-danger'
                          : ''
                      }
                    >
                      {product.name}
                    </span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                <span
                  className={
                    Number(product.stock) < Number(product.minStock)
                      ? 'text-danger'
                      : ''
                  }
                >
                  {product.stock}
                </span>
              </td>
              <td>{product.minStock}</td>
              <td>{product.unitCost}</td>
              <td>{product.sku}</td>
              <td>
                {product.category && product.category.name && (
                  <span
                    className={`badge badge-${
                      product.category.name.length === 4
                        ? colors[0]
                        : product.category.name.length === 5
                        ? colors[1]
                        : product.category.name.length === 6
                        ? colors[2]
                        : product.category.name.length >= 7
                        ? colors[3]
                        : 'secondary'
                    }`}
                  >
                    {product.category.name}
                  </span>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

/* PROP TYPES */
ProductTable.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};

// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Table, Form, Spinner } from 'react-bootstrap';
// import PropTypes from 'prop-types';

// export default function ProductTable({ handleSelect }) {
//   const [colors] = useState(['red', 'blue', 'green', 'yellow']);

//   const { loading, success, products } = useSelector((state) => state.product);

//   return (
//     <Table responsive className="nowrap">
// <thead>
//   <tr>
//     <th>Name</th>
//     <th>Stock</th>
//     <th>Min. Stock</th>
//     <th>Unit Cost</th>
//     <th>SKU</th>
//     <th>Category</th>
//   </tr>
// </thead>
//       <tbody>
//         {loading && products && (
//           <tr>
//             <td colSpan={products.length}>
//               <Spinner animation="border" variant="primary" />
//             </td>
//           </tr>
//         )}

//         {/* If no products are found */}
//         {success && products && Object.keys(products).length === 0 && (
//           <tr>
//             <p className="mt-3">No products found.</p>
//           </tr>
//         )}

//         {/* List Products if found */}
//         {products && Object.keys(products).length > 0 && (
//           <>
//             {products.map((product) => (
//               <tr key={product.id}>
//                 <td>
//                   <Form.Check type="checkbox">
//                     <Form.Check.Input
//                       onChange={(e) => handleSelect(e, product.id)}
//                     />
//                     <Form.Check.Label>
//                       <span
//                         className={
//                           Number(product.stock) < Number(product.minStock)
//                             ? 'text-danger'
//                             : ''
//                         }
//                       >
//                         {product.name}
//                       </span>
//                     </Form.Check.Label>
//                   </Form.Check>
//                 </td>
//                 <td>
//                   <span
//                     className={
//                       Number(product.stock) < Number(product.minStock)
//                         ? 'text-danger'
//                         : ''
//                     }
//                   >
//                     {product.stock} {product.unit.abbr}
//                   </span>
//                 </td>
//                 <td>
//                   <span
//                     className={
//                       Number(product.stock) < Number(product.minStock)
//                         ? 'text-danger'
//                         : ''
//                     }
//                   >
//                     {product.minStock} {product.unit.abbr}
//                   </span>
//                 </td>
//                 <td>$ {Number(product.unitCost).toFixed(2)}</td>
//                 <td>{product.sku}</td>
//                 <td>
//                   <span
//                     className={`badge badge-${
//                       product.category.name.length === 4
//                         ? colors[0]
//                         : product.category.name.length === 5
//                         ? colors[1]
//                         : product.category.name.length === 6
//                         ? colors[2]
//                         : product.category.name.length >= 7
//                         ? colors[3]
//                         : 'secondary'
//                     }`}
//                   >
//                     {product.category.name}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </>
//         )}
//       </tbody>
//     </Table>
//   );
// }

// // PropTypes
// ProductTable.propTypes = {
//   handleSelect: PropTypes.func.isRequired,
// };
