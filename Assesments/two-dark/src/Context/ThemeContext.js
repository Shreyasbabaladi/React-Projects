import {createContext} from 'react';

const Theme=createContext({
    theme:"light",
    setTheme:()=>{}
});
export default Theme;