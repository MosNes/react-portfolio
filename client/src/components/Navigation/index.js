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

function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...props}>
        <NavbarBrand href="/" className='navTitle fw-semibold'>J Moses Nester</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={() => props.setCurrentPage('About')}>
                About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={() => props.setCurrentPage('Portfolio')}>
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={() => props.setCurrentPage('Contact')}>
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={() => props.setCurrentPage('Resume')}>
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