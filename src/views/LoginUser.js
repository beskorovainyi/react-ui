import React from "react";
import {useState} from "react";
import loginUser from "../actions/loginUser";


// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
} from "react-bootstrap";


const LoginUser = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const minLength = (value, length) => value.length >= length;

  function handleLogin() {
    loginUser(email, password)
        .then()
        .catch()
  }

  return (
      <>
        <Container>
          <Form>
            <Card style={{ width: '18rem'}}>
              <Card.Header>
                <h3>Login</h3>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <label>Email</label>
                  <Form.Control
                      value={email}
                      placeholder="Enter email"
                      type="email"
                      onChange={event => {
                        setEmail(event.target.value)
                      }}
                  >
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <label>Password</label>
                  <Form.Control
                      value={password}
                      placeholder="Enter password"
                      type="password"
                      onChange={event => {
                        setPassword(event.target.value)
                      }}
                  >
                  </Form.Control>
                </Form.Group>
              </Card.Body>
              <Card.Footer>
                <Button className="btn-wd" onClick={handleLogin}>Login</Button>
              </Card.Footer>
            </Card>
          </Form>
        </Container>
      </>
  )
}

export default LoginUser