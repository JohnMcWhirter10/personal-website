import React, { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Typography,
  Grid,
  Button,
  keyframes,
  styled,
} from "@mui/material";
import images from "@assets/images";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const BouncingArrowIcon = styled(KeyboardDoubleArrowDown)({
  animation: `${bounce} infinite`,
});

const Home: React.FC = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const handleScrollToAbout = (): void => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Grid
      container
      margin={0}
      padding={0}
      alignItems={"center"}
      minWidth={"100%"}
    >
      <Grid item container sm={12} md={12} height={"100%"}>
        <Grid
          item
          container
          sm={12}
          md={6}
          alignContent={"space-evenly"}
          justifyContent={"center"}
          height={"auto"}
        >
          <Typography variant="h1" align="center" width={"100%"}>
            <i>Howdy, I'm Brea!</i>
          </Typography>
          <Button
            onClick={handleScrollToAbout}
            sx={{ cursor: "pointer", display: "flex", flexDirection: "column" }}
          >
            <Typography variant="h5" align="center" width={"100%"}>
              Scroll
            </Typography>
            <BouncingArrowIcon sx={{ fontSize: "3rem" }} />
          </Button>
        </Grid>
        <Grid
          item
          container
          sm={12}
          md={6}
          alignItems={"center"}
          height={"auto"}
        >
          <Avatar
            alt="Professional Headshot"
            src={images.headshot}
            variant="square"
            sx={{ width: "100%", height: "auto", padding: "20px" }}
          />
        </Grid>
      </Grid>
      <Grid item sm={12} md={12} padding={4} ref={aboutMeRef}>
        <Typography variant="h2">
          <b>About Me</b>
        </Typography>
        <Typography variant="h5">
          <i>Computer Engineer, Web Developer, and Electronics Enthusiast</i>
        </Typography>
        <Typography variant="body1" align="justify" marginTop={4}>
          My name is <i>John Brea McWhirter</i>. I am a passionate software and
          electrical engineer. I seek to learn and apply new technologies to
          advance the agricultural and oil industires improving efficiency,
          reducing cost and waste, and effectively work towards a more
          sustainable future.
        </Typography>
        <Typography variant="body1" align="justify" marginTop={4}>
          From an early age, I learned the rewards of hard work and persistence
          growing up in a farming family outside of the small town of Plains,
          TX. Ever since my feet were able to reach the pedals of an Old Ford
          Truck, I helped my family maintain over 1000 acres of farmland
          distributed throughout West Texas.
        </Typography>
        <Typography variant="body1" align="justify" marginTop={4}>
          I grew an interest in technology when my Dad decided to buy a
          satellite for our tractor. The new technology allowed the tractor to
          align itself using satellite imagery and maintain its course. Simply,
          it could drive itself! To a 12 year old kid, I was truly amazed and
          wanted to learn more about robotics. I attended Texas Tech's GEAR
          Robotics competition with a few of my peers and competed with other
          middle school students across the area.
        </Typography>
        <Typography variant="body1" align="justify" marginTop={4}>
          In High School, I grew my knowledge of STEM by competing in many UIL
          Mathematics events. In addition, growing up in a small town gave me
          the opportunity to participate in any extracurricular activity Plains
          ISD could offer. I lead our football, basketball, and golf teams as a
          Team Captain my Junior and Senior years. I earned the lead role in our
          school's One Act Play and lead our production to UIL Regional my
          Junior year and onto UIL State my senior year obtaining various
          All-Star Cast and Best Actor awards. All the while, I maintained a
          high GPA to earn Salutatorian and started my college courses through
          dual credit. I am grateful for all of the opportunities presented to
          me by High School and how it has affected my college and professional
          career.
        </Typography>
        <Typography variant="body1" align="justify" marginTop={4}>
          I started my college journey at South Plains College in Levelland, TX.
          Here I worked towards an Associate's in Pre-Engineering while I
          figured out what engineering focus I was most interested in. I sought
          leadership positions at the Baptist Student Ministry, SPC Campus
          Ambassadors, and as a Math Tutor for the Engineering Department. I was
          blessed to earn a trip to NASA Glenn Research Center through the NASA
          Community College Aerospace Scholars program. While there, I competed
          with a group of students from around the world attending a community
          college. Together, we designed a mock company and, under the
          restrictions of cost, built a robot which would complete various tasks
          on a course to earn a grant from NASA. In addition, I toured the Glenn
          Research Center and met a current intern who shared with me his
          passion for Computer Engineering and its many opportunities in every
          industry. Because of his inspiring testimony, I decided to visit Texas
          A&M University and consider their Computer Engineering program.
        </Typography>
        <Typography variant="body1" align="justify" marginTop={4}>
          I transferred from South Plains College to Blinn College after 3
          semesters in order to better align with Texas A&M's course
          equivalency. Unfortunately, COVID-19 hit while I was learning more
          about College Station and Texas A&M's diverse history. Despite this, I
          maintained my studies and successfully transferred to Texas A&M's
          Computer Engineering Department with a 4.0 GPA from South Plains
          College and Blinn College.
        </Typography>
        <Typography variant="body1" align="justify" marginTop={4}>
          Due to the lack of interaction during COVID-19, I was unable to pursue
          leadership programs at Texas A&M University. However, I sought a
          different role in the summer of 2021 as Ropes Counselor for a
          Christian camp in Estes Park, CO, called Camp Timberline. Through the
          summer I ministered the gospel to children from the ages of 6-18 and
          ensured their safety and fun use of the many Mountain Adventure
          equipment provided by Camp Timberline.
        </Typography>
        <Typography variant="body1" align="justify" marginTop={4}>
          With COVID-19 restriction finally receeding, I was blessed with the
          opportunity to join the Aggie Men's Club at Texas A&M University. AMC
          provided me with way to lead my fellow students in Texas A&M's core
          values, Respect, Excellence, Leadership, Loyalty, Integrity and
          Sefless service. Specifically, I volunteered through AMC for Big
          Event, AMC's Fall Festival, and a newer event called Maroon On The
          Green. Each of these provided me with a way to give back to my
          community and provide for those with less fortunate circumstances.
        </Typography>
        <Typography variant="body1" align="justify" marginTop={4}>
          In the summer of 2022, I earned an internship with Texas Instruments
          as an Application Enginerring Intern for the High Speed Converter
          Group. Here I collaborated with enthusiastic tehcnologists to provide
          support for High Speed Analog-to-Digital Converters and design a
          Python GUI Framework to provide a consistent and interactive way of
          testing Texas Instruments products. I'm thankful for the opporutnity
          to learn more about Signal Processing and how a language like Python
          can be used to provide industry with an interactive way of integrating
          TI's equipment with anything!
        </Typography>
        <Typography variant="body1" align="justify" marginTop={4}>
          <i>More Information coming soon!</i>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
