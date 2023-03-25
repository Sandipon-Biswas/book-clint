import React from 'react'
import { NavItem} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsBookHalf } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" style={{background:"#1876D3", color:"blue"}}>
      <Container style={{color:"white"}} >
        <NavLink to="/" className='text-light d-flex justify-content-center align-items-center  ' style={{ fontSize:"30px",marginRight:"10px" }} href="#home"> <BsBookHalf/> </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/books" className='text-light nav-link' href="#features">Books</NavLink>
            
          </Nav>
          <Nav>
            <NavLink to="/add"  className='text-light nav-link' href="#deets">Add Books</NavLink>
            <NavLink to='/about' className='text-light nav-link' href="#deets">About us</NavLink>
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

