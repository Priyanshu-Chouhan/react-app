import { useState } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import{Navbar, NavbarBrand ,NavbarToggler,Nav,NavItem,NavbarText, Collapse ,NavLink,} from "reactstrap";
const NavbarC =() =>{
    const [isOpen,setIsOpen]=useState(false)
    return(
    
      <div>
      <Navbar 
      color="dark"
      dark
      expand="md"
      fixed=""
      >
        <NavbarBrand tag={ReactLink} to="/">
          Home
        </NavbarBrand>
        <NavbarToggler onClick={()=>setIsOpen(!isOpen) } />
        <Collapse  isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/login">Login</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/signup">SignUp</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/dashboard">Dashboard</NavLink>
            </NavItem>


            <NavItem>
              <NavLink tag={ReactLink} to="/about">About</NavLink>   
            </NavItem>
           
           
          </Nav>
          <NavbarText>Lagout</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    
    
    
    
    
      )}
      export default NavbarC;