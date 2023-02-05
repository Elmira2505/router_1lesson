import React from 'react';
import company from "./company.png"

import {Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Button from "react-bootstrap/Button";
import {Routes, Route, Links} from 'react-router-dom'
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Photos from "../pages/Photos";



const Header = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Container>
                <NavbarBrand href="/">
                    <img src={company} height="80" width="80" className="d-inline-block align-top"
                         alt="Logo" />
                </NavbarBrand>
                   <NavbarToggle aria-controls="responsive-navbar-nav"/>
                   <NavbarCollapse id="responsive-navbar-nav">
                       <Nav className="me-auto">
                           <NavLink href="/">Home</NavLink>
                           <NavLink href="/about">About</NavLink>
                           <NavLink href="/contacts">Contacts</NavLink>
                           <NavLink href="/photos">Photos</NavLink>

                       </Nav>

                       <Form className="d-flex">
                           <Form.Control
                               type="search"
                               placeholder="Search"
                               className="me-2"
                               aria-label="Search"
                           />
                           <Button variant="outline-info">Search</Button>
                       </Form>
                   </NavbarCollapse>
               </Container>
           </Navbar>
            <Routes>
                <Route path ="/" element={<Home />} />
                <Route path ="/about" element={<About />} />
                <Route path ="/contacts" element={<Contacts />} />
                <Route path ="/photos" element={<Photos />} />

            </Routes>

        </div>
    );
};

export default Header;
