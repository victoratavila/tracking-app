import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import './styles.css';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navStyle = {
    "color": "#FFFFFF",
    "textDecoration": "none"
  }

  const linkNavStyle = {
    "color": "rgba(255, 251, 251, 0.432)",
    "textDecoration": "none",
    "marginRight": "20px"
  }



  return (
    <div>
      <Navbar id = "navbarArea" dark expand="md">

        <NavbarBrand id = "navText" style = {navStyle}> 
           Rastreador
         </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>


            
                <Link to = "/" style = {linkNavStyle}> Início </Link>
       

            {/* <NavItem>
              <NavLink>
               <Link to = "/buscar"  id = "navLink" style = {linkNavStyle}>Buscar 
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</Link>
              </NavLink>
            </NavItem> */}

   
     
                <Link to = "/e" style = {linkNavStyle} > teste </Link>
    


    
{/* 
            <NavItem>
              <NavLink>
                <Link to = "/calculadora" style = {navStyle}>Calculadora</Link>
              </NavLink>
            </NavItem> */}

            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
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
            </UncontrolledDropdown> */}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;