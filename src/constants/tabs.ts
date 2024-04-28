import React from "react";
import Home from "@pages/Home";
import Certifications from "@pages/Certifications";
import Experience from "@pages/Experience";
import Honors from "@pages/Honors";
import Projects from "@pages/Projects";

export interface TabDataProps {
  label: string;
  component: React.FC;
}

export const tabData: TabDataProps[] = [
  { label: "Home", component: Home },
  { label: "Experience", component: Experience },
  { label: "Certifications", component: Certifications },
  { label: "Honors", component: Honors },
  { label: "Projects", component: Projects },
];
