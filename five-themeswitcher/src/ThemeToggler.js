import React,{useContext} from "react"
import ThemeContext from "./ThemeContext";

const ThemeToggler =()=>{
    const [themeMode, setThemeMode]=useContext(ThemeContext);

    return(
        <div
        onClick={()=>{
            setThemeMode(themeMode=="light" ? "dark" : "light")
        }}
        >
        <span>{themeMode=="light" ? "OFF" : "ON"}</span>   
        </div>
    )
}

export default ThemeToggler;