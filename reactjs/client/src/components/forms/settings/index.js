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
import axios from 'axios';

export default function SettingsForm() {
  const [fileInput, setFileInput] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  // When the file input changes update the state with the file
  const handleImageChange = (e) => {
    e.preventDefault();

    // file reader to read the file
    const reader = new FileReader();
    const file = e.target.files[0];

    // set the file input to the file
    reader.onloadend = () => {
      setFileInput(file);
      setImagePreviewUrl(reader.result);
    };

    // read the file as a data url
    reader.readAsDataURL(file);
  };

  // Upload the file to the server
  const uploadImage = async (imageStr) => {
    try {
      const res = await axios.post('/api/upload', { imageString: imageStr });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // When the form is submitted, upload the file
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(fileInput);

    if (!imagePreviewUrl) return;

    uploadImage(imagePreviewUrl);
  };

  return (
    <Container fluid className="mb-5">
      <Row>
        <Col sm={12}>
          <Form onSubmit={handleSubmit}>
            {/* Avatar */}
            <Form.Group>
              <Row>
                <Col sm={2} className="mb-5">
                  <Image
                    src="https://via.placeholder.com/150"
                    fluid
                    roundedCircle
                  />
                </Col>
                <Col sm={3}>
                  <Form.Label className="text-muted h6 mt-3">
                    Upload avatar
                  </Form.Label>
                  <Form.Control type="file" onChange={handleImageChange} />
                  {imagePreviewUrl && <Image src={imagePreviewUrl} fluid />}
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
                    defaultValue="First Name"
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
                    defaultValue="Last Name"
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
                    defaultValue="email"
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
                    defaultValue="password"
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
                  <Form.Control type="text" placeholder="Business name" />
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
                  <Form.Control type="text" placeholder="Website" />
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
