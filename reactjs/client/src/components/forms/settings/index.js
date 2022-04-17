import React, { useState } from 'react';
import {
  Container,
  Col,
  Row,
  Form,
  ButtonGroup,
  Button,
  Image,
} from 'react-bootstrap';
// import axios from 'axios';

export default function SettingsForm() {
  const [imageUrl, setImageUrl] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    businessName: '',
    website: '',
  });

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
    // console.log({
    //   name: `${formData.firstName} ${formData.lastName}`,
    //   email: formData.email,
    //   password: formData.password,
    //   businessName: formData.businessName,
    //   website: formData.website,
    //   avatar: imageUrl,
    // });
  };

  return (
    <Container fluid className="mb-5">
      <Row>
        <Col sm={12}>
          <Form onChange={handleChange} onSubmit={handleSubmit}>
            {/* Avatar */}
            <Form.Group>
              <Row>
                <Col sm={2} className="mb-5">
                  <Image
                    src={imageUrl || 'https://via.placeholder.com/150x150'}
                    fluid
                    roundedCircle
                    className="avatar"
                  />
                </Col>
                <Col sm={3}>
                  <Form.Label className="text-muted h6 mt-3">
                    Upload avatar
                  </Form.Label>
                  <Form.Control type="file" onChange={handleFileChange} />
                  <Form.Text>
                    <small className="text-muted">
                      Image must be less than 2MB and in .jpg, .jpeg, .png, or
                      .gif format.
                    </small>
                  </Form.Text>
                </Col>
              </Row>
            </Form.Group>
            {/* Name */}
            <Form.Group>
              <Row>
                <Col sm={3}>
                  <Form.Label className="text-muted h6 mt-3">
                    First Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    required
                    defaultValue=""
                    name="firstName"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a first name.
                  </Form.Control.Feedback>
                </Col>
                <Col sm={3}>
                  <Form.Label className="text-muted h6 mt-3">
                    Last Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    required
                    defaultValue=""
                    name="lastName"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a last name.
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>
            {/* Email */}
            <Form.Group>
              <Row>
                <Col sm={6}>
                  <Form.Label className="text-muted h6 mt-3">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    defaultValue=""
                    name="email"
                  />
                  <Form.Text className="text-muted">
                    {`We'll never share your email with anyone else.`}
                  </Form.Text>
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email.
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>
            {/* Password */}
            <Form.Group>
              <Row>
                <Col sm={6}>
                  <Form.Label className="text-muted h6 mt-3">
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    defaultValue=""
                    name="password"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a password.
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>
            {/* Business Name */}
            <Form.Group>
              <Row>
                <Col sm={6}>
                  <Form.Label className="text-muted h6 mt-3">
                    Business Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Business name"
                    name="businessName"
                    defaultValue=""
                  />
                </Col>
              </Row>
            </Form.Group>
            {/* Website */}
            <Form.Group>
              <Row>
                <Col sm={6}>
                  <Form.Label className="text-muted h6 mt-3">
                    Website
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Website"
                    name="website"
                    defaultValue=""
                  />
                </Col>
              </Row>
            </Form.Group>
            {/* Buttons */}
            <ButtonGroup className="my-3 gap-2">
              {/* Submit */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
              {/* Delete Account */}
              <Button variant="danger">Delete Account</Button>
            </ButtonGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
