import React ,{useContext}from 'react'
import Colors from '../Color';
import ThemeContext from '../Context/ThemeContext'

const Button=()=>{
    const {theme,setTheme}=useContext(ThemeContext);
    const currentTheme=Colors[theme=="light"? "dark":"light"];
    const buttonstyle={
        color:`${currentTheme.textcolor}`,
        backgroundColor:`${currentTheme.backgroundColor}`
    }
    return(
        <>
        <button onClick={()=>{
            setTheme(theme=='light'? 'dark':'light')
        }}
        style={buttonstyle}
        >{theme=='light'? 'OFF':'ON'}</button>
        </>
    );
}
export default Button;