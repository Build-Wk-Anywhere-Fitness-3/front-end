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
  DropdownItem
} from "reactstrap";


function Header (props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="Navbar" >
        <NavbarBrand href="/">| &ensp;A N Y W H E R E &ensp; F I T N E S S{" "}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <h2>
              <NavLink href="localhost:3000/" className="navLink">Home</NavLink>
            </h2>
            <h2>
              <NavLink href="https://github.com/Build-Wk-Anywhere-Fitness-3" className="navLink">GitHub</NavLink>
            </h2>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sign 
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
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
