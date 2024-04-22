import MyProject from "@components/MyProject";
import { projects } from "@constants/projects";
import { Container, styled } from "@mui/material";
import React from "react";

const ProjectsContainer = styled(Container)({
  minHeight: "100%",
  minWidth: "100%",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 20,
});

const Projects: React.FC = () => {
  return (
    <ProjectsContainer fixed>
      {projects.map((project, index) => (
        <MyProject key={project.title} {...project} />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
