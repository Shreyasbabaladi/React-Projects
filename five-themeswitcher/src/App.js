import React,{useState} from 'react'
import ThemeContext from "./ThemeContext";
import Header from "./Header"
import HeroSection from './HeroSection'

function App() {
  
  const themeHook=useState("light");
  return(
    <ThemeContext.Provider value={themeHook}>

      <div>
        <Header/>
        <HeroSection/>
      </div>
    </ThemeContext.Provider>
  );
  
}

export default App;
