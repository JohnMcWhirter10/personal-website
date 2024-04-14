import React, { useState } from "react";
import { Container, Tab, Tabs } from "@mui/material";
import { containerStyle } from "@constants/constants";
import { MUITheme } from "@context/ThemeContext";
import TabPanel from "@components/TabPanel";
import { tabData } from "@constants/tabs";

import { socialLinks } from "@constants/socialLinks";
import MyLink, { MyLinkProps } from "@components/MyLink";

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabData[0].label);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  return (
    <MUITheme>
      <Container>
        <Tabs value={selectedTab} onChange={handleTabChange}>
          {tabData.map((tab, index) => (
            <Tab key={index} label={tab.label} value={tab.label} />
          ))}
        </Tabs>
        {tabData.map((tab, index) => (
          <TabPanel key={index} value={selectedTab} index={tab.label}>
            <Container fixed sx={containerStyle}>
              {tab.component({})}
            </Container>
          </TabPanel>
        ))}
      </Container>
      <>
        {socialLinks.map((link: MyLinkProps, index: number) => (
          <MyLink
            key={index}
            name={link.name}
            link={link.link}
            icon={link.icon}
          />
        ))}
      </>
    </MUITheme>
  );
};

export default App;
