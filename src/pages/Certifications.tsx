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
  const inProgressCertifications = certifications.filter(
    (certification) => !certification.completed
  );
  const completedCertifications = certifications.filter(
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
          {inProgressCertifications.map((certification, index) => (
            <MyCertification
              key={index}
              expectedDate={certification.expectedDate}
              title={certification.title}
              description={certification.description}
              tasks={certification.tasks}
              completed={false}
              credential={certification.credential}
              credentialWebsite={certification.credentialWebsite}
            />
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Completed
          </Typography>
          <Divider />
          {completedCertifications.map((certification, index) => (
            <MyCertification
              key={index}
              title={certification.title}
              description={certification.description}
              tasks={certification.tasks}
              completed={true}
              credential={certification.credential}
              credentialWebsite={certification.credentialWebsite}
            />
          ))}
        </Grid>
      </Grid>
    </CertificationsContainer>
  );
};

export default Certifications;
