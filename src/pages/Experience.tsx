import React from "react";
import MyJob from "@components/MyJob";
import { Container, styled } from "@mui/material";
import { jobs } from "@constants/jobs";

const ExperienceContainer = styled(Container)({
  minWidth: "100%",
  overflow: "auto",
});

const Experience: React.FC = () => {
  return (
    <ExperienceContainer fixed>
      {jobs.map((job, index) => (
        <Container key={job.title}>
          <MyJob {...job} />
        </Container>
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
