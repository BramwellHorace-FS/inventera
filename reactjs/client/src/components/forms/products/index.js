import React, { useState } from 'react';
import {
  Form,
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import UnitSelect from '../unitSelect';
import CategorySelect from '../categorySelect';

export default function ProductForm({
  handleClose,
  handleChange,
  handleSubmit,
  formData,
  validated,
  materials,
}) {
  const [createCat, setCreateCat] = useState(false);

  const handleCreateCat = () => {
    setCreateCat(!createCat);
  };

  return (
    <Form
      onChange={handleChange}
      onSubmit={handleSubmit}
      validated={validated}
      noValidate
    >
      {/* PRODUCT NAME */}
      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">Product Name </Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter Product Name"
                required
                defaultValue={formData.name}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a name
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>
      {/* STOCK & MIN STOCK */}
      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">Stock </Form.Label>
              <Form.Control
                name="stock"
                type="number"
                placeholder="Enter Stock"
                step=".01"
                required
                defaultValue={formData.stock}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a stock
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Label className="text-muted h6">Minimum Stock</Form.Label>
              <Form.Control
                name="minStock"
                type="number"
                placeholder="Enter Minimum Stock"
                step=".01"
                required
                defaultValue={formData.minStock}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a minimum stock
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* UNIT & CATEGORY */}
      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">Unit </Form.Label>
              <UnitSelect name="unit" defaultValue={formData.unit} />
            </Col>
            <Col>
              <Form.Label className="text-muted h6">Category </Form.Label>
              {!createCat ? (
                <>
                  <CategorySelect
                    name="category"
                    defaultValue={formData.categoryId}
                  />
                  <button type="button" onClick={handleCreateCat}>
                    Create Category
                  </button>
                </>
              ) : (
                <>
                  <Form.Control
                    name="category"
                    type="text"
                    placeholder="Enter Category"
                    required
                    defaultValue={formData.category}
                  />
                  <button type="button" onClick={handleCreateCat}>
                    Select from existing categories
                  </button>
                </>
              )}
              <Form.Control.Feedback type="invalid">
                Please enter a category
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* UNIT COST & SKU */}
      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">Unit Cost </Form.Label>
              <Form.Control
                name="unitCost"
                type="number"
                placeholder="Enter Unit Cost"
                required
                min="0"
                step=".01"
                defaultValue={formData.unitCost}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a unit cost
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Label className="text-muted h6">SKU </Form.Label>
              <Form.Control
                name="sku"
                type="text"
                placeholder="Enter SKU"
                required
                defaultValue={formData.sku}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a SKU
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      {/* MATERIALS USED */}
      <Form.Group>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label className="text-muted h6">Materials Used </Form.Label>
              <Form.Select
                multiple
                name="materials"
                defaultValue={formData.materialId}
              >
                {materials.map((material) => (
                  <Form.Select.Option key={material.id} value={material.id}>
                    {material.name}
                  </Form.Select.Option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </Form.Group>

      <ButtonGroup className="mt-3">
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </ButtonGroup>
    </Form>
  );
}

// PropTypes
ProductForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  validated: PropTypes.bool.isRequired,
  materials: PropTypes.array.isRequired,
};

// import {
//   Form,
//   Button,
//   ButtonGroup,
//   Container,
//   Row,
//   Col,
// } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import validateForm from '../../../utils/validateForm';
// import UnitSelect from '../unitSelect';

// export default function ProductForm({ handleClose }) {
//   const [validated, setValidated] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     stock: '',
//     minStock: '',
//     price: '',
//     sku: '',
//     category: '',
//     unit: '',
//     matUnit: '',
//     material: '',
//   });

//   // Redux State
//   // const { products, status } = useSelector((state) => state);

//   // Redux Dispatch
//   // const dispatch = useDispatch();

//   // handleChange
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // handleSubmit
//   const handleSubmit = (e) => {
//     validateForm(e, setValidated);
//   };

//   return (
//     <Form
//       noValidate
//       validated={validated}
//       onSubmit={handleSubmit}
//       onChange={handleChange}
//     >
//       <Container fluid>
//         {/* PRODUCT NAME */}
//         <Row>
//           <Col>
//             <Form.Label className="text-muted h6 mt-3">Product Name</Form.Label>
//             <Form.Control
//               name="name"
//               type="text"
//               placeholder="Product Name"
//               defaultValue={formData.name}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               {' '}
//               Please enter a product name.{' '}
//             </Form.Control.Feedback>
//           </Col>
//         </Row>
//         {/* STOCK LEVEL */}
//         <Row>
//           <Col>
//             <Form.Label className="text-muted h6 mt-3">Stock</Form.Label>
//             <Form.Control
//               name="stock"
//               type="number"
//               placeholder="Stock"
//               defaultValue={formData.stock}
//               min="0"
//               step=".01"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               {' '}
//               Please enter a stock.{' '}
//             </Form.Control.Feedback>
//           </Col>
//           <Col>
//             <Form.Label className="text-muted h6 mt-3">Min Stock</Form.Label>
//             <Form.Control
//               name="minStock"
//               type="number"
//               placeholder="Min Stock"
//               defaultValue={formData.minStock}
//               min="0"
//               step=".01"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               {' '}
//               Please enter a min stock.{' '}
//             </Form.Control.Feedback>
//           </Col>
//         </Row>
//         {/* UNIT & CATEGORY */}
//         <Row>
//           <Col>
//             <UnitSelect defaultValue={formData.unit} />
//           </Col>
//           <Col>
//             <Form.Label className="text-muted h6 mt-3">Category</Form.Label>
//             <Form.Control
//               name="category"
//               placeholder="Select Category"
//               defaultValue={formData.category}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               {' '}
//               Please enter a category.{' '}
//             </Form.Control.Feedback>
//           </Col>
//         </Row>
//         {/* UNIT COST & SKU */}
//         <Row>
//           <Col>
//             <Form.Label className="text-muted h6 mt-3">Unit Cost</Form.Label>
//             <Form.Control
//               name="price"
//               type="number"
//               placeholder="Unit Cost"
//               defaultValue={formData.price}
//               min="0"
//               step=".01"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               {' '}
//               Please enter a valid unit cost.{' '}
//             </Form.Control.Feedback>
//           </Col>
//           <Col>
//             <Form.Label className="text-muted h6 mt-3">SKU</Form.Label>
//             <Form.Control
//               name="sku"
//               type="text"
//               placeholder="SKU"
//               defaultValue={formData.sku}
//             />
//           </Col>
//         </Row>
//         {/* MATERIAL USED */}
//         <Row>
//           <Col>
//             <Form.Label className="text-muted h6 mt-3">
//               Materials Used
//             </Form.Label>
//             <Form.Select
//               name="material"
//               defaultValue={formData.material}
//               required
//               arial-label="Select material"
//             >
//               <option value="">Select Material</option>
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">
//               Please select a material.
//             </Form.Control.Feedback>
//           </Col>
//         </Row>
//         {/* AMOUNT & UNIT */}
//         <Row>
//           <Col>
//             <Form.Label className="text-muted h6 mt-3">Amount </Form.Label>
//             <Form.Control type="number" placeholder="0" required />
//             <Form.Control.Feedback type="invalid">
//               Please enter an amount.
//             </Form.Control.Feedback>
//           </Col>
//           <Col>
//             <UnitSelect defaultValue={formData.matUnit} />
//           </Col>
//         </Row>
//       </Container>
//       {/* ADD MORE MATERIAL */}
//       <Container fluid className="mt-3">
//         <Row>
//           <Col>
//             <Button type="button" variant="secondary">
//               Add Material
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//       {/* BUTTONS */}
//       <ButtonGroup className="mt-3 d-flex gap-3 p-2">
//         <Button variant="secondary" onClick={handleClose}>
//           Cancel
//         </Button>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </ButtonGroup>
//     </Form>
//   );
// }

// ProductForm.propTypes = {
//   handleClose: PropTypes.func.isRequired,
// };
