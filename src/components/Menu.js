import React from "react"
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import rootReducer from '../reducers/index'

// react-bootstrap components
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";

const Menu = () => {
  let location = useLocation()

  const logout = () => {
    console.log("logout")
  }

  const user_name = useSelector(state => state.user.currentUser)


  return (
      <>
        <Navbar bg="light" expand="sm">
          <Container>
            <Navbar.Brand>
              {/*Application*/}
              {user_name}
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link to="/auth/registration" as={Link}
                          className={
                            location.pathname === "/auth/registration"
                                ? "active"
                                : ""
                          }
                >
                  Registration
                </Nav.Link>
                <Nav.Link to="/auth/login" as={Link}
                          className={
                            location.pathname === "/auth/login"
                                ? "active"
                                : ""
                          }
                >
                  login
                </Nav.Link>
                <Nav.Link onClick={logout}>
                  logout
                </Nav.Link>
              </Nav>
              <NavDropdown id="menu-dropdown" title="Menu">
                <NavDropdown.Item href="/action_1">Action 1</NavDropdown.Item>
                <NavDropdown.Item to="/auth/registration" as={Link}>Action 2</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
  )
}

export default Menu