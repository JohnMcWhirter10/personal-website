import React from "react";
import { Tabs, Tab } from "@mui/material";
import { TabDataProps } from "@constants/tabs";

interface TabsProps {
  tabData: TabDataProps[];
  selectedTab: string;
  handleTabChange: (newValue: string) => void;
}

const MyTabs: React.FC<TabsProps> = ({
  tabData,
  selectedTab,
  handleTabChange,
}) => {
  const handleChange = (
    _event: React.SyntheticEvent | undefined,
    newValue: string
  ) => {
    handleTabChange(newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={handleChange}>
        {tabData.map((tab, index) => (
          <Tab key={index} label={tab.label} value={tab.label} />
        ))}
      </Tabs>
    </>
  );
};

export default MyTabs;
