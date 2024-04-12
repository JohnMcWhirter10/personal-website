import React from "react";
import MyJob from "@components/MyJob";
import { Divider } from "@mui/material";
import { jobs } from "@constants/jobs";

const Experience: React.FC = () => {
  return (
    <>
      {jobs.map((job, index) => (
        <>
          <MyJob {...job} />
          {index < jobs.length - 1 && <Divider />}
        </>
      ))}
    </>
  );
};

export default Experience;
