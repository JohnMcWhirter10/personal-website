import { Container, Typography, TypographyProps } from "@mui/material";
import React from "react";

interface ParagraphProps {
  title: string;
  variant: TypographyProps["variant"];
  data: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ title, variant, data }) => {
  return (
    <Container
      sx={{
        width: "100%",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Typography variant={variant} sx={{ width: "100%", fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant={variant} sx={{ paddingTop: "1rem", width: "100%" }}>
        {data}
      </Typography>
    </Container>
  );
};

export default Paragraph;
