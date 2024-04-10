import React, { createContext, useContext } from "react";
import { createTheme, Theme } from "@mui/material/styles";

interface ThemeContextType {
  theme: Theme;
}

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#001F3F",
    },
    secondary: {
      main: "#003366",
    },
    background: {
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

const ThemeContext = createContext<ThemeContextType>({ theme: defaultTheme });

export const useThemeContext = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: defaultTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
