import React, { useState } from "react";
import {
  Container,
  Tab,
  Tabs,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import TabPanel from "./components/TabPanel";
import Home from "./components/Home";
import { containerStyle } from "./constants/constants";

// Define your custom theme
const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          position: "relative",
          zIndex: 1,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          position: "relative",
          display: "inline-flex",
          marginLeft: 5,
          color: "inherit",
          textDecoration: "none",
          alignItems: "center",
          "&::before": {
            content: "''",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: -8,
            left: 0,
            zIndex: -1,
            borderBottom: "none",
            borderRadius: ".5em .5em 0 0",
            background:
              "#ddd linear-gradient(hsla(0,0%,100%,.6), hsla(0,0%,100%,0))",
            transformOrigin: "bottom",
          },
        },
      },
    },
  },
});

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (
    event: any,
    newValue: React.SetStateAction<number>
  ) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab disableRipple label="Home" />
        <Tab disableRipple label="About" />
        <Tab disableRipple label="Portfolio" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        <Container fixed sx={containerStyle}>
          <Home />
        </Container>
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <Container fixed sx={containerStyle}>
          About Content
        </Container>
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        <Container fixed sx={containerStyle}>
          Portfolio Content
        </Container>
      </TabPanel>
    </ThemeProvider>
  );
};

export default App;
