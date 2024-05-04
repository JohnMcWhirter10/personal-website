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
          <React.Fragment key={project.title}>
            {project.component ? (
                <>
                {project.component({...project})}
                </>
            ) : (
                <MyProject {...project} />
            )}
          </React.Fragment>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
