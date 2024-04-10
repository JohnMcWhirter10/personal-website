import React, { useState } from "react";
import { Container } from "@mui/material";
import { MyTabs, MyTab } from "@components/MyTabs";
import Home from "@pages/Home";
import { containerStyle } from "@constants/constants";
import Goals from "@pages/Goals";
import { ThemeProvider } from "@context/ThemeContext";
import TabPanel from "@components/TabPanel";

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider>
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
        <MyTabs value={selectedTab} onChange={handleTabChange}>
          <MyTab disableRipple label="Home" />
          <MyTab disableRipple label="Goals" />
          <MyTab disableRipple label="Portfolio" />
        </MyTabs>
        <TabPanel value={selectedTab} index={0}>
          <Container fixed sx={containerStyle}>
            <Home />
          </Container>
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <Container fixed sx={containerStyle}>
            <Goals />
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
