import React from 'react';
import './mobileMenu.css'
import { FaTimes } from 'react-icons/fa';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavDropdown} from "react-bootstrap";

const MobileMenu = ({ menuState }) => {
    const [subMenuObject, setSubMenuObject] = React.useState({});
    return (
        <>
            {menuState.state && (
                <div className='modalOverlay' onClick={()=>menuState.setState(!menuState.state)}>
                    <div className='modalContent' onClick={(e) => e.stopPropagation()}>

                        <div className="btn-maroon p-4" style={{ minHeight:'70vh' }}>
                            <div className=' py-1'>

                                <div className="row d-flex align-items-center my-2">

                                    <div className="col " />


                                    <div className="col text-end me-2">
                                        <button className='btn p-1' onClick={()=>{
                                            setSubMenuObject({})
                                            menuState.setState(!menuState.state)
                                        }}>
                                            <FaTimes className='text-black' size={'30'}/>
                                        </button>
                                    </div>

                                </div>

                            </div>

                            <div className='px-4 mt-4 pt-5' style={{ overflow:'scroll', maxHeight:"75%" }}>

                                <Navbar.Collapse id="basic-navbar-nav" className={"show"}>
                                    <Nav className="me-auto justify-content-center w-75 text-white">
                                        <NavDropdown title="Services" id="basic-nav-dropdown" className="custom-dropdown-menu custom-color-font" >
                                            <NavDropdown.Item href="https://joinpomegranate.com/wellness-supplements/" className={"custom-color-font"}>
                                                Wellness & Supplements
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="https://joinpomegranate.com/primary-urgent-care/" className={"custom-color-font"}>
                                                Primary & Urgent Care
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="https://joinpomegranate.com/skin-care/" className={"custom-color-font"}>
                                                Skin Care
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="https://joinpomegranate.com/weight-loss/" className={"custom-color-font"}>
                                                Weight Loss
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="https://joinpomegranate.com/womens-health/" className={"custom-color-font"}>
                                                Women’s Health
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="https://joinpomegranate.com/hair/" className={"custom-color-font"}>
                                                Hair
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="https://joinpomegranate.com/for-men/" className={"custom-color-font"}>
                                                For Men
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="https://joinpomegranate.com/mental-health/" className={"custom-color-font"}>
                                                Mental Health
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Resources" id="resources" className="custom-dropdown-menu custom-color-font">
                                            <NavDropdown.Item href="https://joinpomegranate.com/blog/" className={"custom-color-font"}>
                                                Blog
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="https://joinpomegranate.com/membership/" className={"custom-color-font"}>Membership</Nav.Link>
                                        <Nav.Link href="https://joinpomegranate.com/about-us/" className={"custom-color-font"}>About Us</Nav.Link>
                                        <Nav.Link href="https://joinpomegranate.com/for-men/" className={"custom-color-font"}>For Men</Nav.Link>
                                        <Nav.Link href="https://joinpomegranate.com/contact-us/" className={"custom-color-font"}>Contact Us</Nav.Link>
                                    </Nav>
                                    <Nav className="ms-auto">
                                        <div className="row mt-5">
                                            <div className="col-6">
                                                <a href={"https://phr.charmtracker.com/login.sas?FACILITY_ID=3a3047be28b32bf917742bc2eb330fe2af97a3fb48399b0e98ee2e5ce9d5cc8ac81b440bc8a53a00"} className="btn btn-black px-2 px-lg-4 py-2">Member Login</a>
                                            </div>
                                            <div className="col-6">
                                                <a href={"https://joinpomegranate.com/membership/"} className="btn btn-black px-2 py-2">Get Started</a>
                                            </div>
                                        </div>
                                    </Nav>
                                </Navbar.Collapse>



                            </div>

                        </div>
                        <div style={{ minHeight:'25vh' }} className={"d-flex align-items-center justify-content-center"}>
                            <img
                                width="189"
                                height="29"
                                src="https://joinpomegranate.com/wp-content/uploads/2023/07/Logo_White.svg"
                                alt=""
                            />
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default MobileMenu;
