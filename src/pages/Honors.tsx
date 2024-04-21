import MyJob from "@components/MyJob";
import { honors } from "@constants/honors";
import { Container, Divider } from "@mui/material";
import React from "react";

interface HonorsProps {}

const Honors: React.FC<HonorsProps> = () => {
  return (
    <Container fixed sx={{ minHeight: "100%", minWidth: "100%" }}>
      {honors.map((honor, index) => (
        <Container key={honor.title}>
          <MyJob {...honor} />
          {index < honors.length - 1 && <Divider />}
        </Container>
      ))}
    </Container>
  );
};

export default Honors;
