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
import NavLogo from './../BBBFrontPage/NavLogo'

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar color="dark" light expand="md" className="Navbar">
        <NavbarBrand href="/"
          style={{color: '#e6b31e', textDecoration: 'none'}}
          activeStyle={{color: '#fcfaf1', textDecoration: 'none'}}>
          {/* | &ensp;A N Y W H E R E &ensp; F I T N E S S{" "} */}
        <div className="navLogo">
          <NavLogo />
        </div>
          
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <h2>
              <NavLink 
              style={{color: '#ffffff', textDecoration: 'none'}}
              activeStyle={{color: '#ba9503', textDecoration: 'none'}}
              href="localhost:3000/" className="navLink">
                Home
              </NavLink>
            </h2>
            <br />
            <h2>
              <NavLink
                style={{color: '#cacaca', textDecoration: 'none'}}
                activeStyle={{color: '#ba9503', textDecoration: 'none'}}
                href="https://github.com/Build-Wk-Anywhere-Fitness-3"
                className="navLink"
              >
                GitHub
              </NavLink>
            </h2>
            <br />
            <h2>
              <NavLink 
              style={{color: '#cacaca', textDecoration: 'none'}}
              activeStyle={{color: '#ba9503', textDecoration: 'none'}}
              href="" className="navLink">
                Courses
              </NavLink>
            </h2>
            <h2>
              <NavLink
                style={{color: '#cacaca', textDecoration: 'none'}}
                activeStyle={{color: '#ba9503', textDecoration: 'none'}}
                href="https://build-wk-anywhere-fitness-3.github.io/ui/index.html"
                className="navLink"
              >
                Marketing
              </NavLink>
            </h2>
            <h2>
              <NavLink
                style={{color: '#cacaca', textDecoration: 'none'}}
                activeStyle={{color: '#ba9503', textDecoration: 'none'}}
                href="https://build-wk-anywhere-fitness-3.github.io/ui/about.html"
                className="navLink"
              >
                About
              </NavLink>
            </h2>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret
              style={{color: '#ba9503', textDecoration: 'none'}}
              activeStyle={{color: '#ba9503', textDecoration: 'none'}} >
                Login/SignUp
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
