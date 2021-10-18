import React from 'react';
import Carusol from '../Carusol/Carusol';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer';

import Navbar from '../Navbar';
import Services2 from '../Services/Services2';


const Header = () => {
    return (
        <div>
           
            <Carusol></Carusol>
            <Services2></Services2>
            <ContactUs></ContactUs>
            
           
        </div>
    );
};

export default Header;