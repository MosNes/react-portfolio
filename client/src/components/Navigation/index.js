import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">J Moses Nester</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/about/">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio/">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume/">
                Resume
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;