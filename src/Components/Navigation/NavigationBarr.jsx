import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import rahul from "../../Image/dr rahul.png"
import { Link } from 'react-router-dom';
import ServiceData from '../DropData/ServiceData';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

import "./navi.css"
function NavigationBarr() {
  const [colap,setColap] = useState(false)
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => setExpanded(false);
  return (
    <>
 
<Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
          <Container>
            <Navbar.Brand href="#home">
              <a href="index.html" className="navbar-brand">
                <img src={rahul} alt="logo" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />
            <Navbar.Collapse id="basic-navbar-nav " className="heeyy ">
              <Nav  >
                <Nav.Link href="#link" className="nav-item" onClick={handleNavClose}>
                  <Link
                    to="/"
                    className="nav-link active linkLine"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link href="#home" className="nav-item" onClick={handleNavClose}>
                  <Link
                    to="/about-page"
                    className="nav-link linkLine"
                    href="about.html"
                  >
                    about Us
                  </Link>
                </Nav.Link>
                <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                {ServiceData.map((service, index) => (
                  <NavDropdown.Item key={index} href={service.slug} onClick={handleNavClose}>
                    {service.h1}
                  </NavDropdown.Item>
                ))}
                <NavDropdown.Divider />
              </NavDropdown>
                <Nav.Link href="#home" className="nav-item" onClick={handleNavClose}>
                  <Link to="/branches" className="nav-link linkLine">
                    FAQ
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link" className="nav-item" onClick={handleNavClose}>
                  <Link to="/contact" className="nav-link">
                    Contact Us
                  </Link>
                  
                </Nav.Link>
                
              </Nav>
              <div className='book-raj-btn'>
                
                <a href='https://stetho.org.in/book-appointment/w8p4z2l5q9r1o7g3k6f0v9a2c8s4u6j5e9d2b4'>
                <Button variant="primary">Book Appoitment</Button>{' '}
            </a>
               
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default NavigationBarr
