import React from "react";
import {useState} from "react";
import {Card, Container, Form} from "react-bootstrap";


const RegistrationUser = () => {

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
      <>
        <Container>
          <Form>
            <Card>
              <Card.Header>
                <h3>Register user</h3>
              </Card.Header>
              <Card.Body>
                <Form.Group>
                  <label>Nickname</label>
                  <Form.Control
                      value={nickname}
                      placeholder="Enter nickname"
                      type="text"
                      onChange={(event => {
                        setNickname(event.target.value)
                      })}
                  >
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <label>Email</label>
                  <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group>
                  <label>Password</label>
                  <Form.Control></Form.Control>
                </Form.Group>
                <Form.Group>
                  <label>Confirm password</label>
                  <Form.Control></Form.Control>
                </Form.Group>

              </Card.Body>
            </Card>
          </Form>
        </Container>
      </>
  )

}

export default RegistrationUser