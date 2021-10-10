import React from "react";
import {useState} from "react";
import {Card, Container, Form, Button} from "react-bootstrap";
import registrationUser from "../actions/registrationUser";
import {useHistory} from "react-router-dom";


const RegistrationUser = () => {

  // const minLength = (value, length) => value.length >= length;
  const equalTo = (value1, value2) => value1 === value2;
  const history = useHistory()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerConfirmPasswordState, setRegisterConfirmPasswordState] = useState(false);
  // const [registerEmailState, setRegisterEmailState] = useState(false);
  // const [registerNameState, setRegisterNameState] = useState(false);
  // const [registerPasswordState, setRegisterPasswordState] = useState(false);


  function handleRegistration() {
    registrationUser(name, email, password)
        .then(response => {
          if (response.status === 200) {
            history.push('/auth/login')
          } else {
            alert(response.statusText)
          }
        })
  }

  return (
      <>
        <Container>
          <Form>
            <Card style={{width: '18rem'}}>
              <Card.Header>
                <h3>Register user</h3>
              </Card.Header>
              <Card.Body>
                <Form.Group>
                  <label>Name</label>
                  <Form.Control
                      value={name}
                      placeholder="Enter name"
                      type="text"
                      onChange={event => {
                        setName(event.target.value)
                      }}
                  >
                  </Form.Control>
                </Form.Group>
                <Form.Group>
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
                <Form.Group>
                  <label>Confirm password</label>
                  <Form.Control
                      value={confirmPassword}
                      placeholder="Confirm password"
                      type="password"
                      onChange={event => {

                        setConfirmPassword(event.target.value)
                        if (equalTo(password, confirmPassword)) {
                          setRegisterConfirmPasswordState(true)
                        } else {
                          setRegisterConfirmPasswordState(false)
                        }
                      }}
                  >
                  </Form.Control>
                </Form.Group>
              </Card.Body>
              <Card.Footer>
                <Button className="btn-wd" onClick={handleRegistration}>Registration</Button>
              </Card.Footer>
            </Card>
          </Form>
        </Container>
      </>
  )

}

export default RegistrationUser