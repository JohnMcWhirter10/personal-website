import MyProject from "@components/MyProject";
import { projects } from "@constants/projects";
import { Container, Divider } from "@mui/material";
import React from "react";

const Projects: React.FC = () => {
  return (
    <Container fixed sx={{ minHeight: "100%", minWidth: "100%" }}>
      {projects.map((project, index) => (
        <>
          <MyProject key={project.title} {...project} />
          {index < projects.length - 1 && <Divider />}
        </>
      ))}
    </Container>
  );
};

export default Projects;
