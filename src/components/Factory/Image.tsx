import { Avatar, Container, Typography, TypographyProps } from "@mui/material";
import React from "react";

interface ImageProps {
  title: string;
  variant: TypographyProps["variant"];
  data: string;
}

const Image: React.FC<ImageProps> = ({ title, variant, data }) => {
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
      <Avatar src="" />
    </Container>
  );
};

export default Image;
