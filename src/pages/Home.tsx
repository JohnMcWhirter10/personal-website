// noinspection SpellCheckingInspection

import React, { useRef } from "react";
import {
  Avatar,
  Typography,
  Grid,
  Button,
  styled,
  useMediaQuery,
} from "@mui/material";
import images from "@assets/images";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { useThemeContext } from "@context/ThemeContext";

const ScrollIcon = styled(KeyboardDoubleArrowDown)({
  fontSize: "3rem",
});

const ScrollButton = styled(Button)({
  cursor: "pointer",
  flexDirection: "column",
  width: "100%",
});

const Headshot = styled(Avatar)({
  width: "100%",
  padding: "2.1rem",
  height: "auto",
});

const HomeGridContainer = styled(Grid)({
  minWidth: "100%",
  overflow: "auto",
  padding: 0,
});

const Home: React.FC = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const { theme } = useThemeContext();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScrollToAbout = (): void => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HomeGridContainer container>
      <Grid item xs={12}>
        <Typography variant="h2" align="center" width={"100%"}>
          <i>Howdy, I'm Brea!</i>
        </Typography>
        <ScrollButton
          onClick={handleScrollToAbout}
          sx={{ display: isSmallScreen ? "flex" : "none" }}
        >
          <Typography variant="h5" align="center" width={"100%"}>
            Scroll
          </Typography>
          <ScrollIcon />
        </ScrollButton>
      </Grid>
      <Grid
        item
        sm={12}
        md={6}
        display={"flex"}
        width={"100%"}
        alignItems={"center"}
      >
        <Headshot
          alt="Professional Headshot"
          src={images.headshot}
          variant="square"
        />
      </Grid>
      <Grid
        item
        sm={12}
        md={6}
        ref={aboutMeRef}
        padding={"1rem"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
      >
        <Typography variant="h6" textAlign={"center"} fontStyle={"italic"}>
          Computer Engineer
          <br />
          Software Developer
          <br />
          Electrical Engineer
        </Typography>
        <Typography variant="body1" align="justify">
          Howdy, I'm <i>John Brea McWhirter</i>, a software and electrical
          engineer with a deep-seated passion for technology. Growing up
          surrounded by cattle, farmland, and oil, I developed a work ethic
          which has allowed me to pursue and achieve greatly in my personal
          interests. Armed with a degree in Computer Engineering, I'm advancing
          technology and bringing a unique perspective on its implementation.
          Currently rooted in the vibrant Dallas-Fort Worth Area, I'm thriving
          as a Software Developer, crafting solutions that push boundaries and
          spark progress. Thank you for finding the time to navigate to my
          website! I am honored that you have chosen to learn a little about me.
          Please contact me through my LinkedIn page for any and all inquiries!
        </Typography>
      </Grid>
    </HomeGridContainer>
  );
};

export default Home;
