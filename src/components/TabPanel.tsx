import { Container, styled } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";

interface TabPanelProps {
  children: ReactNode;
  value: string;
  index: string;
}

const TabContainer = styled(Container)({
  padding: "1.5rem",
  background: "#eee",
  borderRadius: ".15em",
  boxShadow: "0 3px 15px rgba(0,0,0,0.3)",
  height: "min(70vh, 700px)",
  width: "100%",
  overflowY: "auto",
});

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value: propValue,
  index,
}) => {
  const [value, setValue] = useState<string>(propValue);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  return (
    <TabContainer
      fixed
      disableGutters
      role="tabpanel"
      sx={{ display: value === index ? "flex" : "none" }}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </TabContainer>
  );
};

export default TabPanel;
