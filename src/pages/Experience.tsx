import React from "react";
import MyJob from "@components/MyJob";
import { Container, Divider } from "@mui/material";
import { jobs } from "@constants/jobs";

const Experience: React.FC = () => {
  return (
    <>
      {jobs.map((job, index) => (
        <Container key={job.title}>
          <MyJob {...job} />
          {index < jobs.length - 1 && <Divider />}
        </Container>
      ))}
    </>
  );
};

export default Experience;
