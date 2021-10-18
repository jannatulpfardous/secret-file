import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './Components/About/About';
import Appoinment from './Components/Appoinment/Appoinment';
import Services from './Components/Services/Services';
import Services2 from './Components/Services/Services2';
import Services3 from './Components/Services/Services3';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';






const App = () => {


  return (
    <>
   
      <Router>
      <Navbar></Navbar>
        

          <Switch>
            <Route exact path="/">
              <Header></Header>
            </Route>

            <Route  path="/about">
              <About/>

            </Route>
            
            <Route  exact path="/services">
              <Services/>

            </Route>
           
            <Route  exact path="/services3">
             <Services3></Services3>

            </Route>

            <Route  exact path="/appointment">
              <Appoinment/>

            </Route>
          

          </Switch>
          <Footer></Footer>
        
      </Router>
     
      </>

    
  );
};

export default App;

