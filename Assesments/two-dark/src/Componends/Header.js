import React,{useContext} from 'react'
import ThemeContext from "../Context/ThemeContext"
import Colors from '../Color'
const Header=()=>{
    const {theme}=useContext(ThemeContext);
    const currentTheme=Colors[theme];

    const headerStyle={
        backgroundColor:`${currentTheme.backgroundColor}`
    }

    return(
        <header>
            Theme Toggler
        </header>
    );
}
export default Header;