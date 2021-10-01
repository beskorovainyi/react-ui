import React from "react"

// react-bootstrap components
import {
  Navbar,
  Nav,
  NavItem,
  Container,
  NavDropdown,
} from "react-bootstrap";

const Menu = () => {

  return(
      <>
        <Navbar bg="light" expand="sm">
          <Container>
            <Navbar.Brand>
            Application
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link href="#logout">
                  logout
                </Nav.Link>
                <Nav.Link href="#login">
                  login
                </Nav.Link>
              </Nav>
              <NavDropdown id="menu-dropdown" title="Menu">
                <NavDropdown.Item href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="">Action</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
  )
}

export default Menu