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

  const [firstName, setFirstName] = useState("");
  const [registerFirstNameState, setRegisterFirstNameState] = useState(true);
  const minLength = (value, length) => value.length >= length;

  return (
      <>
        <div><h1>Content</h1></div>
      </>
  )
}

export default AuthUser