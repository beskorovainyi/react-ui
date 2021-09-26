import React from "react"

// react-bootstrap components
import {
  Navbar,
  Nav,
  NavItem,
} from "react-bootstrap";

const Menu = () => {

  return(
      <Navbar>
        <h1>Menu</h1>
        <Nav>
          <NavItem>
            Link
          </NavItem>
          <NavItem>
            Link
          </NavItem>
        </Nav>
      </Navbar>
  )
}

export default Menu