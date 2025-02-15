import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import {FaAlignRight} from "react-icons/fa";
import {bindState} from "../utils/globalFunctions";
import MobileMenu from "./MobileMenu";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <>
            <Navbar  expand="lg" className="header-color">
                <Container className=" p-2">
                    <Navbar.Brand href="https://joinpomegranate.com/">
                        <img
                            width="189"
                            height="29"
                            src="https://joinpomegranate.com/wp-content/uploads/2023/07/Logo_Red.svg"
                            className={"ms-lg-0 ms-md-4 ms-1"}
                            alt=""
                        />
                    </Navbar.Brand>
                    <MobileMenu menuState={bindState(isMobileMenuOpen,setIsMobileMenuOpen)} />

                    <button onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)} className={"show_mobile_screen"}  style={{ border:0, color:'#84012A', backgroundColor:'transparent' }}>
                        <FaAlignRight size={30} />
                    </button>

                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto justify-content-center w-75">
                            <NavDropdown title="Services" id="basic-nav-dropdown" className="custom-dropdown-menu" >
                                <NavDropdown.Item href="https://joinpomegranate.com/wellness-supplements/">
                                    Wellness & Supplements
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://joinpomegranate.com/primary-urgent-care/">
                                    Primary & Urgent Care
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://joinpomegranate.com/skin-care/">
                                    Skin Care
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://joinpomegranate.com/weight-loss/">
                                    Weight Loss
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://joinpomegranate.com/womens-health/">
                                    Women’s Health
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://joinpomegranate.com/hair/">
                                    Hair
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://joinpomegranate.com/for-men/">
                                    For Men
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://joinpomegranate.com/mental-health/">
                                    Mental Health
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://joinpomegranate.com/pharmacy/">
                                    Pharmacy
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Resources" id="resources" className="custom-dropdown-menu">
                                <NavDropdown.Item href="https://joinpomegranate.com/blog/">
                                    Blog
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="https://joinpomegranate.com/membership/">Membership</Nav.Link>
                            <Nav.Link href="https://joinpomegranate.com/about-us/">About Us</Nav.Link>
                            <Nav.Link href="https://joinpomegranate.com/for-men/">For Men</Nav.Link>
                            <Nav.Link href="https://joinpomegranate.com/contact-us/">Contact Us</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <a href={"https://phr.charmtracker.com/login.sas?FACILITY_ID=3a3047be28b32bf917742bc2eb330fe2af97a3fb48399b0e98ee2e5ce9d5cc8ac81b440bc8a53a00"} className=" me-2 btn btn-outline-maroon">Member Login</a>
                            <a href={"https://joinpomegranate.com/membership/"} className=" me-2 me-lg-0 btn btn-maroon mt-2 mt-lg-0">Get Started</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
