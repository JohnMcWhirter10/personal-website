import React, { useState } from "react";
import { Container } from "@mui/material";
import { MyTabs, MyTab } from "@components/MyTabs";
import Home from "@pages/Home";
import { containerStyle } from "@constants/constants";
import Goals from "@pages/Goals";
import { MUITheme } from "@context/ThemeContext";
import TabPanel from "@components/TabPanel";

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <MUITheme>
      <Container
        sx={{
          marginTop: '1rem',
          maxWidth: 'calc(100%-48px)'
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
            <div style={{width:'1200px', maxWidth: '100%'}}>
              Portfolio Content
            </div>
          </Container>
        </TabPanel>
      </Container>
    </MUITheme>
  );
};

export default App;
