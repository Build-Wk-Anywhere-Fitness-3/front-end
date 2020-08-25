import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="Navbar">
        <NavbarBrand href="/">
          | &ensp;A N Y W H E R E &ensp; F I T N E S S{" "}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <h2>
              <NavLink href="localhost:3000/" className="navLink">
                Home
              </NavLink>
            </h2>
            <br />
            <h2>
              <NavLink
                href="https://github.com/Build-Wk-Anywhere-Fitness-3"
                className="navLink"
              >
                GitHub
              </NavLink>
            </h2>
            <br />
            <h2>
              <NavLink href="" className="navLink">
                Courses
              </NavLink>
            </h2>
            <h2>
              <NavLink href="" className="navLink">
                About
              </NavLink>
            </h2>

            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Login-SignUp
                </DropdownToggle>
              <DropdownMenu right>
              <Link to="/login">
                <DropdownItem>Login</DropdownItem>
              </Link>
              <Link to="/">
                <DropdownItem>Sign-Up</DropdownItem>
              </Link>
                <DropdownItem divider />
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <h3>Simple Text</h3> */}
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
