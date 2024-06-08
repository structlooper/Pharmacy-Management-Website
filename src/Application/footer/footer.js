import React from 'react';
import {FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaTiktok} from "react-icons/fa";
import {FaThreads} from "react-icons/fa6";

const Footer = () => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static.legitscript.com/seals/22698071.js"; // Updated to HTTPS
        script.async = true;
        script.onload = () => {
            console.log('Script loaded and ready');
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <footer className="page-footer font-small blue pt-4 btn-maroon">
            <div className="container ps-lg-5 pb-lg-5 pb-md-5 pb-4">
                <div className="row">
                    <div className="col-md-9 col-lg-10 mt-md-0 mt-3">
                        <h2>Get the latest from us</h2>

                        <form className="form-inline justify-content-center">
                            <div className="my-auto align-items-start position-relative w-res-50 mt-4">
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                <div  style={{
                                    position: 'absolute',
                                    right: 0,
                                    backgroundColor:'transparent',
                                    height:"100%",
                                    width:"10%", top: '60%',
                                    transform: 'translateY(-50%)' }} >
                                    <FaArrowRight size={20} color={"#84012A"} />
                                </div>
                            </div>
                        </form>
                    </div>



                    <div className="col-auto mb-md-0 mb-3  align-items-end hide-on-mobile">
                        <h5 className="text-uppercase">
                            <img width="145" height="30"
                                 src="https://joinpomegranate.com/wp-content/uploads/2023/07/Logo_White.svg"
                                  alt="" className={"img-fluid"} />
                        </h5>
                        <h6 className="">
                            <a
                            href="tel:813-419-1189" className={"theme-anchor"}>813-419-1189</a>
                        </h6>
                    </div>
                </div>
                <div className="col-12 mt-4">
                    {
                        [
                            {
                                title:<FaLinkedin size={25} />,
                                link:"https://www.linkedin.com/company/joinpomegranate/"
                            },
                            {
                                title:<FaInstagram size={25} />,
                                link:"https://www.instagram.com/joinpomegranate/"
                            },
                            {
                                title:<FaTiktok size={25} />,
                                link:"https://www.tiktok.com/@joinpomegranate?_t=8k7mxCFT2Bn&_r=1"
                            },
                            {
                                title: <FaFacebook size={25}/>,
                                link: "https://www.facebook.com/joinpomegranate"
                            },
                            {
                                title:<FaThreads size={25} />,
                                link:"https://www.threads.net/@joinpomegranate"
                            }
                        ].map((iconDetails, index) => <a key={index} href={iconDetails.link} className=" me-lg-4 me-5 theme-anchor" target={"_blank"}>{iconDetails.title}</a>)
                    }


                </div>
                <div className="col-md-3 mt-4">
                    <ul className="list-unstyled">
                        <li className={"mt-3"}><a href="https://joinpomegranate.com/contact-us/" className={"theme-anchor"} style={{ marginTop:10 }}>Contact Us</a></li>
                        <li className={"mt-3"}><a href="https://joinpomegranate.com/membership/" className={"theme-anchor"} >Membership</a></li>
                        <li className={"mt-3"}><a href="https://joinpomegranate.com/about-us/" className={"theme-anchor"}>About Us</a></li>
                        <li className={"mt-3"}><a href="https://joinpomegranate.com/accessibility/" className={"theme-anchor"}>Accessibility</a></li>
                        <li className={"mt-3"}><a href="https://joinpomegranate.com/wp-content/uploads/2023/11/Pharmacy-Saving-Card.pdf" className={"theme-anchor"}>Pharmacy Savings card</a></li>
                        <li className={"mt-3"}><a href="https://www.flsenate.gov/Laws/Statutes/2015/501.0575" className={"theme-anchor"}>Florida Patients</a></li>
                    </ul>

                    <h6 className="show_mobile_screen col-12">
                        <a
                            href="tel:813-419-1189" className={"theme-anchor"}>813-419-1189</a>
                    </h6>
                    <div className={"mt-4 mt-lg-0"}>
                        <img src={require("../asserts/22698071.png")} width="140" height="140" alt="badge" className={"img-fluid"} />

                    </div>
                    <div id="legitscript-seal">
                        {/* The badge script will insert content here */}
                    </div>
                </div>





                <hr className={"py-2"} />

                <div className={"row my-2"}>
                    <div className="row col-12 col-lg-8 col-md-12">
                        <div className="col-12 col-lg-auto col-md-12 mt-2 ">
                            <a href="https://joinpomegranate.com/terms-of-consent/" className={"theme-anchor"} style={{ marginTop:10 }}>Terms Of Consent</a>
                        </div>
                        <div className="col-12 col-lg-auto col-md-12 mt-2 ">
                            <a href="https://joinpomegranate.com/hippa/" className={"theme-anchor"} style={{ marginTop:10 }}>HIPAA</a>
                        </div>
                        <div className="col-12 col-lg-auto col-md-12 mt-2 ">
                            <a href="https://joinpomegranate.com/terms-of-service/" className={"theme-anchor"} style={{ marginTop:10 }}>Terms Of Service</a>
                        </div>
                        <div className="col-12 col-lg-auto col-md-12 mt-2 ">
                            <a href="https://joinpomegranate.com/subscription-terms/" className={"theme-anchor"} style={{ marginTop:10 }}>Subscription Terms</a>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 col-md-12  d-lg-flex align-items-end justify-content-end mt-2 ">
                        <div className="text-lg-end">© Pomegranate Health 2024</div>
                    </div>
                </div>
            </div>


        </footer>
            );
};

export default Footer;
