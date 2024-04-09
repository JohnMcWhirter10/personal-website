import React, { useState } from "react";
import {
  Container,
  Tab,
  Tabs,
  createTheme,
  ThemeProvider,
  styled,
} from "@mui/material";
import TabPanel from "./components/TabPanel";
import Home from "./components/Home";
import { containerStyle } from "./constants/constants";

const CustomTabs = styled(Tabs)({
  position: "relative",
  zIndex: 1,
});

const CustomTab = styled(Tab)(({ theme }) => ({
  position: "relative",
  display: "inline-flex",
  marginLeft: 5,
  alignItems: "center",
  borderRadius: ".5em .5em 0 0",
  boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
  color: theme.palette.common.white, // Text color
  backgroundColor: "#001F3F", // Dark Navy background color
  "&:hover": {
    backgroundColor: "#003366", // Darker Navy background color on hover
  },
  "&.Mui-selected": {
    color: theme.palette.background.paper,
  },
}));

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
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
      <CustomTabs value={selectedTab} onChange={handleTabChange}>
        <CustomTab disableRipple label="Home" />
        <CustomTab disableRipple label="About" />
        <CustomTab disableRipple label="Portfolio" />
      </CustomTabs>
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
