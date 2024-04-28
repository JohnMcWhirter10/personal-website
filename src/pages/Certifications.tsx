import React from "react";
import MyCertification from "@components/MyCertification";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { certifications } from "@constants/certifications";

const Certifications: React.FC = () => {
  const inProgresscertifications = certifications.filter(
    (certification) => !certification.completed
  );
  const completedcertifications = certifications.filter(
    (certification) => certification.completed
  );

  return (
    <Container fixed sx={{ minHeight: "100%", minWidth: "100%" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            In Progress
          </Typography>
          <Divider />
          {inProgresscertifications.map((certification, index) => (
            <MyCertification
              key={index}
              expectedDate={certification.expectedDate}
              title={certification.title}
              description={certification.description}
              tasks={certification.tasks}
              completed={false}
            />
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Completed
          </Typography>
          <Divider />
          {completedcertifications.map((certification, index) => (
            <MyCertification
              key={index}
              title={certification.title}
              description={certification.description}
              tasks={certification.tasks}
              completed={true}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Certifications;
