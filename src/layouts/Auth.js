import React from "react";
import {useState} from "react";

// react-bootstrap components
// import {
//   Badge,
//   Button,
//   Card,
//   Form,
//   InputGroup,
//   Navbar,
//   Nav,
//   Container,
//   ProgressBar,
//   Row,
//   Col,
// } from "react-bootstrap";

const Auth = () => {

  const [firstName, setFirstName] = useState("");
  const [registerFirstName, setRegisterFirstName] = useState(true);

  return (
      <div>
        <h1>Auth Page</h1>

        <Form.Group className={
          "has-label " +
          (registerFirstNameState ? "has-success" : "has-error")
        }>
          <span className="star">*</span>
          <label>First Name</label>
          <Form.Control
              value={firstName}
              placeholder="Your First Name"
              type="text"
              onChange={(event) => {
                setFirstName(event.target.value);
                if (minLength(event.target.value, 1)) {
                  setRegisterFirstNameState(true);
                } else {
                  setRegisterFirstNameState(false);
                }
              }}
          ></Form.Control>
        </Form.Group>

      </div>
  )
}

export default Auth