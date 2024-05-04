import React from "react";
import { TypographyProps } from "@mui/material/Typography";
import Paragraph from "@components/Factory/Paragraph";
import Bullets from "@components/Factory/Bullets";

export type ComponentData = {
  type: string;
  variant: TypographyProps["variant"];
  data: string | string[];
};

export type ComponentDataMap = Record<string, ComponentData>;

const Factory: React.FC<{ componentData: ComponentDataMap }> = ({
  componentData,
}) => {
  return (
    <>
      {Object.entries(componentData).map(([key, value]) => {
        const { type, variant, data } = value;
        switch (type) {
          case "paragraph":
            return (
              <Paragraph
                key={key}
                title={key}
                variant={variant}
                data={data as string}
              />
            );
          case "list":
            return (
              <Bullets
                key={key}
                title={key}
                variant={variant}
                data={data as string[]}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default Factory;
