import {
  Collapse,
  Grid,
  IconButton,
  Link,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface MyProjectProps {
  title: string;
  link: string;
  description: string;
}

const Title = styled(Link)({
  textAlign: "left",
  fontWeight: "bold",
  textDecoration: "none",
  ":hover": {
    backgroundColor: "blue",
  },
});

const Body = styled(Typography)({
  textAlign: "justify",
});

const MyProject: React.FC<MyProjectProps> = ({ title, link, description }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container>
      <Grid item xs={6} display={"flex"} alignItems={"center"}>
        <Title variant="h4" href={link}>
          {title}
        </Title>
      </Grid>
      <Grid item xs={6} display={"flex"} flexDirection={"row-reverse"}>
        <IconButton onClick={handleToggle}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Collapse in={expanded}>
          <Body variant="h6" align="right">
            {description}
          </Body>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default MyProject;
