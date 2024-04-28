import MyJob from "@components/MyJob";
import { honors } from "@constants/honors";
import { Container, styled } from "@mui/material";
import React from "react";

const HonorsContainer = styled(Container)({
  minWidth: "100%",
  overflow: "auto",
});

const Honors: React.FC = () => {
  return (
    <HonorsContainer fixed sx={{ minHeight: "100%", minWidth: "100%" }}>
      {honors.map((honor, index) => (
        <Container key={honor.title}>
          <MyJob {...honor} />
        </Container>
      ))}
    </HonorsContainer>
  );
};

export default Honors;
