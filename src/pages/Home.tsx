import React from "react";
import { Avatar, Typography, Grid, Container } from "@mui/material";
import images from "@assets/images";

const Home: React.FC = () => {
  return (
    <Grid
      container
      margin={0}
      alignItems={"center"}
      justifyContent={"center"}
      height={"800px"}
    >
      <Grid item xs={12} sm={6} minWidth={300}>
        <Typography variant="h1" align="center">
          Howdy, I'm Brea!
        </Typography>
        <Typography variant="h6" align="justify">
          I am a Computer Engineer with a background in Web Development,
          Embedded Processing, and Circuit Design!
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} justifyItems={"center"} minWidth={300}>
        <Avatar
          alt="Professional Headshot"
          src={images.headshot}
          variant="square"
          sx={{ width: "100%", height: "auto", padding: "20px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
