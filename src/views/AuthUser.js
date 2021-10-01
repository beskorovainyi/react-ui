import React from "react";
import {useState} from "react";


// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Container,
  ProgressBar,
  Row,
  Col,
} from "react-bootstrap";

const AuthUser = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const minLength = (value, length) => value.length >= length;

  console.log(email, password)
  return (
      <>
        <Container>
          <Form>
            <Card className="">
              <Card.Header>
                <h3>Login</h3>
              </Card.Header>
              <Card.Body>
                <Form.Group className="">
                  <label>Email</label>
                  <Form.Control
                  value={email}
                  placeholder="Enter email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <label>Password</label>
                  <Form.Control
                  value={password}
                  placeholder="Enter password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  ></Form.Control>
                </Form.Group>
              </Card.Body>
            </Card>
          </Form>
        </Container>
      </>
  )
}

export default AuthUser