import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./Contact.css"; // Import the CSS file for styling

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const [result, setResult] = useState("");
  const [open, setOpen] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "9c4b7f4a-ba63-4774-9143-a9ec643696c7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setOpen(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container className="contact-container">
      <Row>
        <Col md={6} className="c-left">
          <h1 className="contact-title">Contact Us</h1>
        </Col>
        <Col md={6} className="c-right">
          <form onSubmit={onSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              className="contact-input"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              className="contact-input"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              className="contact-input"
              placeholder="Message"
              required
            />
            <Button type="submit" className="contact-button">
              Send
            </Button>
          </form>
        </Col>
      </Row>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success">
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
