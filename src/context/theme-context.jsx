import {createContext, useState} from "react";
import '../variables.css'

export const themes = {
    light:{
        color: `var(--color-secund-dark)` ,
        background: 'var(--color-body-ligth)'
    },
    dark:{
        color:'var(--color-body-ligth)',
        background: `var(--color-body-dark)`
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) =>{
    const [theme,setTheme] = useState(themes.dark)
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}