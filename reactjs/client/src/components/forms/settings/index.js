import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';

export default function SettingsForm() {
  const [imageUrl, setImageUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    businessName: '',
    website: '',
  });

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file change and set imageUrl
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // On form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch update user action here with formData and imageUrl
    // update user controller in backend
    dispatch({});
  };

  return (
    <Container fluid className="mb-5">
      <Form onChange={handleChange} onSubmit={handleSubmit} className="w-50">
        {/* User Avatar */}
        <Row className="w-75">
          <Col sm={12} lg={5}>
            <Image
              src={
                (userData && userData.avatarUrl) ||
                imageUrl ||
                'https://via.placeholder.com/150x150'
              }
              roundedCircle
              className="avatar w-100 h-auto"
            />
          </Col>
          <Col sm={12} lg={7}>
            <Form.Label className="text-muted h6 mt-3">
              Upload a profile picture
            </Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
            <Form.Text className="text-muted">
              Image must be less than 2MB
            </Form.Text>
          </Col>
        </Row>
        {/* Name  */}
        <Row className="mt-5">
          <Col>
            <Form.Label className="text-muted h6">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={userData && userData.name}
              required
            />
          </Col>
        </Row>
        {/* Email */}
        <Row className="mt-3">
          <Col>
            <Form.Label className="text-muted h6">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={userData && userData.email}
              required
            />
          </Col>
        </Row>
        {/* Business Name & Website */}
        <Row className="mt-3">
          <Col sm={12} lg={6}>
            <Form.Label className="text-muted h6">Business Name</Form.Label>
            <Form.Control
              type="text"
              name="businessName"
              placeholder="Business Name"
              defaultValue={userData && userData.businessName}
            />
          </Col>
          <Col sm={12} lg={6}>
            <Form.Label className="text-muted h6">Website</Form.Label>
            <Form.Control
              type="text"
              name="website"
              placeholder="Website"
              defaultValue={userData && userData.website}
            />
          </Col>
        </Row>
        {/* Password */}
        <Row className="mt-3">
          <Col sm={12} lg={6}>
            <Form.Label className="text-muted h6">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              defaultValue={formData.password}
              required
            />
          </Col>
          <Col sm={12} lg={6}>
            <Form.Label className="text-muted h6">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              defaultValue={formData.passwordConfirm}
              required
            />
          </Col>
        </Row>
        {/* Submit Button  & Delete Button */}
        <Row className="mt-5 gap-2 w-75">
          <Col md={12} xl={2} lg={2}>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Col>
          <Col md={12} xl={9} lg={10}>
            <Button variant="danger" type="button">
              Delete Account
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
