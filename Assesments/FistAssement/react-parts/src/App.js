import React from 'react';
import './styles.css';

import Nav from './Componds/Nav';
import Masthead from './Componds/Masthead';
import PortFolio from './Componds/PortFolio';
import About from './Componds/About';
import ContactSection from './Componds/ContactSection';
import Footer from './Componds/Footer';


const App=()=>{
    return(
        <div>
            <Nav/>
            <Masthead/>
            <PortFolio/>
            <About/>
            <ContactSection/>
            <Footer/>
        </div>
    
    );
};


export default App;