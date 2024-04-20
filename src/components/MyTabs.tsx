import { Tabs } from "@mui/material";
import React, { useEffect } from "react";
import { ReactNode, useState } from "react";

interface MyTabsProps {
  children: ReactNode;
  value: string;
  onChange: (_event: React.SyntheticEvent, newValue: string) => void;
}

export const MyTabs: React.FC<MyTabsProps> = ({
  children,
  value: propValue,
  onChange,
}) => {
  const [value, setValue] = useState<string>(propValue);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  return (
    <Tabs value={value} onChange={onChange}>
      {children}
    </Tabs>
  );
};
