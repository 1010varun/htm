import React, { useState } from 'react';
import { Form, Button, Toast, ToastContainer } from 'react-bootstrap';
import '../App.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    team: ''
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
      phone: '',
      team: ''
    });

    setShowToast(true);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="registration-form">
        <Form.Group controlId="formName" className="form-group">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhone" className="form-group">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </Form.Group>

        <Form.Group controlId="formTeam" className="form-group">
          <Form.Label>Team</Form.Label>
          <Form.Control
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
            placeholder="Enter your team name"
            required
          />
        </Form.Group>

        <Button variant="success" type="submit" className="form-submit">
          Register
        </Button>
      </Form>

      <ToastContainer position="top-end" className="p-3">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Registration Success</strong>
          </Toast.Header>
          <Toast.Body>Thank you for registering!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default RegistrationForm;
