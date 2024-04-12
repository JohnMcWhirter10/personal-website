import React, { ReactNode } from "react";

interface TabPanelProps {
  children: ReactNode;
  value: string;
  index: string;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

export default TabPanel;
