import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './ContactStyle.css';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const [result, setResult] = useState('');
  const [open, setOpen] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');

    const formData = new FormData(event.target);
    formData.append('access_key', '9c4b7f4a-ba63-4774-9143-a9ec643696c7');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      setOpen(true);
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact Us</h1>
        </Col>
        <Col md={6} className="c-right">
          <form onSubmit={onSubmit}>
            <input type="text" name="name" className="user" placeholder="Name" required />
            <input type="email" name="email" className="user" placeholder="Email" required />
            <textarea name="message" className="user" placeholder="Message" required />
            <Button type="submit" className="button">
              Send
            </Button>
          </form>
        </Col>
      </Row>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ backgroundColor: '#2196F3' }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
