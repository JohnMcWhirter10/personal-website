import React, { createContext, useContext } from "react";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";

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
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          position: "relative",
          zIndex: 1,
        },
        indicator: {
          display: "none",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          marginLeft: 5,
          marginRight: 5,
          borderRadius: ".5em .5em 0 0",
          color: "white",
          backgroundColor: "#001F3F",
          "&:hover": {
            backgroundColor: "#003366",
          },
          "&.Mui-selected": {
            color: "white",
            backgroundColor: "#0066dd",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          margin: "0",
          paddingTop: "0",
          paddingBottom: "0",
          paddingLeft: "20",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: "0",
          padding: "0",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          height: 4,
          marginTop: 4,
          marginBottom: 12,
          backgroundColor: "#001F3F",
        },
      },
    },
  },
});

defaultTheme.typography.h1 = {
  ...defaultTheme.typography.h1,
  fontSize: "3rem",
  [defaultTheme.breakpoints.up("md")]: {
    fontSize: "4rem",
  },
  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: "6rem",
  },
};

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({ theme: defaultTheme });

export const useThemeContext = () => useContext(ThemeContext);

export const MUITheme: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};
