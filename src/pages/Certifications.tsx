import React from "react";
import MyCertification from "@components/MyCertification";
import { Container, Divider, Grid, Typography, styled } from "@mui/material";
import { certifications } from "@constants/certifications";

const CertificationsContainer = styled(Container)({
  minWidth: "100%",
  overflow: "auto",
  padding: 0,
});

const Certifications: React.FC = () => {
  const inProgresscertifications = certifications.filter(
    (certification) => !certification.completed
  );
  const completedcertifications = certifications.filter(
    (certification) => certification.completed
  );

  return (
    <CertificationsContainer fixed>
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
    </CertificationsContainer>
  );
};

export default Certifications;
