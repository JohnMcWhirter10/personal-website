import React, { useState } from "react";
import { Container, styled } from "@mui/material";
import { MUITheme, useThemeContext } from "@context/ThemeContext";
import TabPanel from "@components/TabPanel";
import { tabData } from "@constants/tabs";

import { socialLinks } from "@constants/socialLinks";
import MyLink, { MyLinkProps } from "@components/MyLink";
import MyTabs from "@components/MyTabs";

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabData[0].label);
  const { theme } = useThemeContext();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const Body = styled(Container)({
    width: "min(1200px, 100vw)",
    minWidth: "360px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "8%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
    },
  });

  const Footer = styled(Container)({
    marginTop: "2%",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "8%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
    },
  });

  return (
    <MUITheme>
      <Body disableGutters fixed maxWidth={false}>
        <MyTabs
          value={selectedTab}
          onChange={handleTabChange}
          tabData={tabData}
        />
        {tabData.map((tab, index) => (
          <TabPanel key={index} value={selectedTab} index={tab.label}>
            {tab.component({})}
          </TabPanel>
        ))}
      </Body>
      <Footer fixed>
        {socialLinks.map((link: MyLinkProps, index: number) => (
          <MyLink
            key={index}
            name={link.name}
            link={link.link}
            icon={link.icon}
          />
        ))}
      </Footer>
    </MUITheme>
  );
};

export default App;
