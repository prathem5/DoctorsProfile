// import React, { useState, useEffect } from 'react';
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { CiYoutube } from "react-icons/ci";




// import './Nav.css';
// import { Link } from 'react-router-dom';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import ServiceData from '../DropData/ServiceData';
// import drlogo from '../../../src/Image/dr rahul.png';

// function Navb() {
//   const [scrolled, setScrolled] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [scrolled]);

//   return (
//     <>
//       <section>
//         {/* Your pre-header section */}
//         <nav className="navb">
//       <div className="left-side">
//         <a href="#" className="social-icon">
//         <CiYoutube />

//         </a>
//         <a href="#" className="social-icon">
//         <FaFacebookF />
//         </a>
//         <a href="#" className="social-icon">
//         <FaTwitter />

//         </a>
//       </div>
//       <div className="right-side">
//         <div className="email-section">
//           {/* Your email section content here */}
//           <p>Email: example@example.com</p>
//         </div>
//         <div className="pla">
//           Lorem ipsum dolor sit amet, consectetur adipisicing.
//         </div>
//       </div>
//     </nav>
//       </section>

//       <Navbar expand="lg" className={`bg-body-tertiary ${scrolled ? 'scrolled' : ''}`}>
//         <Container>
//           <div className="navimg">
//             <img src={drlogo} alt="" />
//           </div>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home">
//                 <Link to="/">HOME</Link>
//               </Nav.Link>
//               <Nav.Link href="#about">
//                 <Link to="/about-page">ABOUT</Link>
//               </Nav.Link>
//               <NavDropdown title="SERVICES" id="basic-nav-dropdown">
//                 {ServiceData.map((service, index) => (
//                   <NavDropdown.Item key={index} href={service.slug}>
//                     {service.h1}
//                   </NavDropdown.Item>
//                 ))}
//                 <NavDropdown.Divider />
//               </NavDropdown>
//               <Nav.Link href="#blog">
//                 <Link to="/branches">FAQ</Link>
//               </Nav.Link>
//               <Nav.Link href="#gallery">
//                 <Link to="/contact">CONTACT US</Link>
//               </Nav.Link>
//             </Nav>
//             <div className="d-flex flex-row align-items-center">
//               {/* Show the "Book Appointment" button outside the toggle bar on screens larger than or equal to laptop size */}
//               <div className="bt d-none d-lg-block">
//                 <a href="https://stetho.org.in/book-appointment/w8p4z2l5q9r1o7g3k6f0v9a2c8s4u6j5e9d2b4">
//                   Book Appointment
//                 </a>
//               </div>
//               <div className="d-lg-none">
                
//               </div>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Navb;










