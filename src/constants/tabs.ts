import React from "react";
import Home from "@pages/Home";
import Goals from "@pages/Goals";
import Experience from "@pages/Experience";

export interface TabDataProps {
  label: string;
  component: React.FC;
}

export const tabData: TabDataProps[] = [
  { label: "Home", component: Home },
  { label: "Experience", component: Experience },
  { label: "Goals", component: Goals },
];
