import React from 'react';
import Navbar from './Navbar';
import HeroSection  from './HeroSection';
import AppSection from './AppSection';
import CarSection from './CardSection';
import Footer from './Footer';

const App=()=>{
    return(
       <div>
           <Navbar/>
           <HeroSection/>
           <CarSection/>
           <AppSection/>
           <Footer/>
       </div>
    );
};

export default App;