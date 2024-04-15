import React, { createContext, useContext } from "react";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          height: "100vh",
          minHeight: "950px",
          minWidth: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e8e4e4",
        },
        "@media (max-width: 400px)": {
          body: {
            overflow: "hidden",
          },
        },
        "*::-webkit-scrollbar": {
          width: "0.4em",
        },
        "*::-webkit-scrollbar-track": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,31,63,0.3)",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,31,63,1)",
          outline: "1px solid slategrey",
        },
      },
    },
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
  [defaultTheme.breakpoints.up("xs")]: {
    fontSize: "2rem",
  },
  [defaultTheme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
  [defaultTheme.breakpoints.up("md")]: {
    fontSize: "4rem",
  },
  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: "6rem",
  },
};

defaultTheme.typography.h2 = {
  ...defaultTheme.typography.h2,
  fontSize: "2.2rem",
  [defaultTheme.breakpoints.up("xs")]: {
    fontSize: "1.8rem",
  },
  [defaultTheme.breakpoints.up("sm")]: {
    fontSize: "2.2rem",
  },
  [defaultTheme.breakpoints.up("md")]: {
    fontSize: "2.6rem",
  },
  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: "3.4rem",
  },
};

defaultTheme.typography.h3 = {
  ...defaultTheme.typography.h3,
  fontSize: "1.5rem",
  [defaultTheme.breakpoints.up("xs")]: {
    fontSize: "1.2rem",
  },
  [defaultTheme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
  [defaultTheme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: "2.2rem",
  },
};

defaultTheme.typography.h4 = {
  ...defaultTheme.typography.h4,
  fontSize: "1.3rem",
  [defaultTheme.breakpoints.up("xs")]: {
    fontSize: "1.1rem",
  },
  [defaultTheme.breakpoints.up("sm")]: {
    fontSize: "1.3rem",
  },
  [defaultTheme.breakpoints.up("md")]: {
    fontSize: "1.6rem",
  },
  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
};

defaultTheme.typography.h5 = {
  ...defaultTheme.typography.h5,
  fontSize: "1.1rem",
  [defaultTheme.breakpoints.up("xs")]: {
    fontSize: "0.9rem",
  },
  [defaultTheme.breakpoints.up("sm")]: {
    fontSize: "1.1rem",
  },
  [defaultTheme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: "1.8rem",
  },
};

defaultTheme.typography.h6 = {
  ...defaultTheme.typography.h6,
  fontSize: "0.9rem",
  [defaultTheme.breakpoints.up("xs")]: {
    fontSize: "0.7rem",
  },
  [defaultTheme.breakpoints.up("sm")]: {
    fontSize: "0.9rem",
  },
  [defaultTheme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: "1.2rem",
  },
};

defaultTheme.typography.body1 = {
  textAlign: "justify",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "1rem",
  [defaultTheme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
  },
  [defaultTheme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
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
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
