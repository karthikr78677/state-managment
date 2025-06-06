import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import {Provider} from "react-redux"
import store from "../store/store"
import { useSelector } from 'react-redux';
const RootLayout = () => {
    const cartProducts=useSelector(state=>state.cart);
  return (
    <>
  
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Shopping Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">
              <span style={{fontSize:"24px"}}>Home</span>
            </Link>
            <Link to="/product">
              <span style={{marginLeft:"20px",fontSize:"24px"}}>products</span>
            </Link>
           
              <Nav.Link as={Link} to="/cart" > My Bag{cartProducts.length} </Nav.Link>
           
            
          </Nav>
         
        </Container>
      </Navbar>
    
    
      
    
    <main>
            <Outlet/>
        </main>
      
        
    </>
  )
}

export default RootLayout