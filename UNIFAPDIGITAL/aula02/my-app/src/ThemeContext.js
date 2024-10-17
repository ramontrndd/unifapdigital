import React, {createContext, useState, useContext} from 'react';

const ThemeContext = createContext();

export default function ThemeProvider({children})  {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => { 
        setIsDarkMode(prevmode => !prevmode);
    }

return (
    <ThemeContext.Provider value = {[isDarkMode, toggleTheme]}>
        
            {children}

         
         </ThemeContext.Provider>
)

}

export function useTheme() {
    return useContext(ThemeContext);
}