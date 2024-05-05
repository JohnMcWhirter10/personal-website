import MyProject from "@components/Projects/MyProject";
import { projects } from "@constants/projects";
import { Container, styled } from "@mui/material";
import React from "react";

const ProjectsContainer = styled(Container)({
  height: "auto",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 20,
  overflow: "auto",
});

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      {projects.map((project, index) => (
        <MyProject key={project.title} {...project} />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
