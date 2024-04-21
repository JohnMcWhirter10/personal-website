import React from "react";
import MyJob from "@components/MyJob";
import { Container, Divider } from "@mui/material";
import { jobs } from "@constants/jobs";

const Experience: React.FC = () => {
  return (
    <Container fixed sx={{ minHeight: "100%", minWidth: "100%" }}>
      {jobs.map((job, index) => (
        <>
          <MyJob key={job.title} {...job} />
          {index < jobs.length - 1 && <Divider />}
        </>
      ))}
    </Container>
  );
};

export default Experience;
