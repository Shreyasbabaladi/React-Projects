import React,{useState} from 'react';
import Colors from './Color';
import Header from './Componends/Header';
import Button from './Componends/Button';
import ThemeContext from './Context/ThemeContext';
import './App.css';

function App() {
  const [themeMode,setthemeMode]=useState("light");
  const currentTheme=Colors[themeMode];

  const wrapperstyle={
    backgroundColor:`${currentTheme.backgroundColor}`,
    color:`${currentTheme.textcolor}`
  }

  return(
    <div className="wrapper"
    style={wrapperstyle}>
      <ThemeContext.Provider value={{
        theme:themeMode,
        setTheme:setthemeMode
      }}>
        <Header/>
        <Button/>
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
