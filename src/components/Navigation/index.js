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
        <NavbarBrand href="https://mosnes.github.io/portfolio/" className='navTitle fw-semibold'>J Moses Nester</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={() => props.setCurrentPage('About')} className={props.currentPage === 'About' ? 'navActive' : ''}>
                About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={() => props.setCurrentPage('Portfolio')} className={props.currentPage === 'Portfolio' ? 'navActive' : ''}>
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={() => props.setCurrentPage('Contact')} className={props.currentPage === 'Contact' ? 'navActive' : ''}>
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={() => props.setCurrentPage('Resume')} className={props.currentPage === 'Resume' ? 'navActive' : ''}>
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