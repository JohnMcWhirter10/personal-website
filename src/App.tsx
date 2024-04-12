import React, { Component, useState } from "react";
import { Container, Tab, Tabs } from "@mui/material";
import { containerStyle } from "@constants/constants";
import { MUITheme } from "@context/ThemeContext";
import TabPanel from "@components/TabPanel";
import Home from "@pages/Home";
import Goals from "@pages/Goals";
import Experience from "@pages/Experience";

const tabData = [
  { label: "Home", component: <Home /> },
  { label: "Goals", component: <Goals /> },
  { label: "Experience", component: <Experience /> },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabData[0].label);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  return (
    <MUITheme>
      <Container
        sx={{
          marginTop: "1rem",
          maxWidth: "calc(100%-48px)",
        }}
      >
        <Tabs value={selectedTab} onChange={handleTabChange}>
          {tabData.map((tab, index) => (
            <Tab key={index} label={tab.label} value={tab.label} />
          ))}
        </Tabs>
        {tabData.map((tab, index) => (
          <TabPanel key={index} value={selectedTab} index={tab.label}>
            <Container fixed sx={containerStyle}>
              {tab.component}
            </Container>
          </TabPanel>
        ))}
      </Container>
    </MUITheme>
  );
};

export default App;
