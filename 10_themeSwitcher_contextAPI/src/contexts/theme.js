import { createContext, useContext } from "react";

// passing default value in context
// here, passing an object
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {

    },
    lightTheme: () => {

    }
});


// no need to create separate file for provider
// exporting provider from same file only
export const ThemeProvider = ThemeContext.Provider;


// custom hook, so that we don't have to import ThemeContext and useContext separately
export default function useTheme() {
    return useContext(ThemeContext)
}