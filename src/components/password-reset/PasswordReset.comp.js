import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

const PasswordReset = ({ formSwitcher }) => {
  const { input: email, setInput: setEmail } = useInput(""); //rename fields when using object destructuring
  console.log(email);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={setEmail}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit">Reset Password</Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <a
        href="/#"
        className="d-block text-right"
        onClick={() => formSwitcher("login")}
      >
        Login Now
      </a>
    </Container>
  );
};

PasswordReset.propTypes = {
  formSwitcher: PropTypes.func.isRequired,
};

export default PasswordReset;
