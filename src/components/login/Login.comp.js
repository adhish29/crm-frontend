import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

const Login = ({ formSwitcher }) => {
  const { input: email, setInput: setEmail } = useInput(""); //rename fields when using object destructuring

  // const email = useInput();
  const { input: password, setInput: setPassword } = useInput("");

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  console.log(email, password);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) alert("email or password missing");
  }
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
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

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={setPassword}
                // onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <a
        href="/#"
        className="d-block text-right"
        onClick={() => formSwitcher("reset")}
      >
        Forget password?
      </a>
    </Container>
  );
};

Login.propTypes = {
  formSwitcher: PropTypes.func.isRequired,
};

export default Login;
