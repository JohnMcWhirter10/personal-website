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
  width: "100%",
  zIndex: 1,
});

const CustomTab = styled(Tab)(({ theme }) => ({
  marginLeft: 5,
  borderRadius: ".5em .5em 0 0",
  color: theme.palette.common.white,
  backgroundColor: "#001F3F",
  "&:hover": {
    backgroundColor: "#003366",
  },
  "&.Mui-selected": {
    color: theme.palette.background.paper,
  },
}));

const theme = createTheme({
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
      <Container
        fixed
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
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
      </Container>
    </ThemeProvider>
  );
};

export default App;
