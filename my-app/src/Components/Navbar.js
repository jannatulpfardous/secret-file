import React from 'react';

import { Link } from 'react-router-dom';


const Navbar = () => {
    return (


        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> <span style={{ fontFamily: "Besley" }}>MENTAL</span> <span style={{ color: "#303f9f", fontFamily: "Besley" }}> ENERGY </span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 m-4">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page" ><span style={{ fontFamily: "Besley" }}>HOME</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" class="nav-link" ><span style={{ color: "#faf7f9", fontFamily: "Besley" }}>ABOUT</span></Link>
                            </li>

                            <li class="nav-item">
                                <Link to ="/appointment" class="nav-link" ><span style={{ color: "#faf7f9", fontFamily: "Besley" }}>appointment</span></Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/services" class="nav-link" ><span style={{ color: "#faf7f9", fontFamily: "Besley" }}>services</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/services3" class="nav-link" ><span style={{ color: "#faf7f9", fontFamily: "Besley" }}>services3</span></Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;