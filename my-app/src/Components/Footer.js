import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="mt-4">

            <div className="footer-container">
                <div className="container">
                    <div className="row row2">



                        <div className="col-md-2">

                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Home</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>About</li>
                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Services</li>

                                    <li className="footer-menu" style={{ fontFamily: "Besley" }}>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1 style={{ fontFamily: "Besley", textAlign: "center" }}>Mental<span style={{ color: "#007bff", fontFamily: "Besley" }} > Energy </span></h1>
                                <div className="icons-container d-flex text-center ">

                                </div>
                                <p className="mt-4 ">
                                    <small style={{ fontFamily: "Besley", }}>
                                        “Let the young know they will never find a more interesting, more instructive book than the patient himself.” 5. “The aim of medicine is to prevent disease and prolong life; the ideal of medicine is to eliminate the need of a physician.”
                                    </small>
                                </p>


                            </div>
                        </div>




                        <div className="col-md-5">
                            <div className="right-footer-container">


                                <div className="phone d-flex align-items-center justify-content-center mt-4">

                                    <div>
                                        <h5 style={{ fontFamily: "Besley" }}> <small> Call me: </small>
                                            +12345 365 789 / +01235 789 654</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">

                                    <div>
                                        <p> <span className="foter-phone-icon" style={{ fontFamily: "Besley" }}>
                                            Address : 125, Las Vegus, Main City, USA</span>
                                            <br />
                                            <p style={{ fontFamily: "Besley" }}>Hours: Open ⋅ Closes 10:30PM  <span className="foter-phone-icon">


                                            </span></p>


                                        </p>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <p style={{ height: "120px", textAlign: "center", fontWeight: "bold", padding: "30px", fontFamily: "Besley" }}><small> ©copyright  <span style={{ color: "#007bff" }}>Amily Shahrin</span>@Mental Energy </small></p>

        </div>


    );
};

export default Footer;