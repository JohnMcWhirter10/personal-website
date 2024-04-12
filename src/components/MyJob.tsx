import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Collapse,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import IconButton from "@mui/material/IconButton";

interface MyJobProps {
  title: string;
  companyTitle: string;
  location: string;
  startDate: string;
  endDate: string;
  bulletPoints: string[];
}

const MyJob: React.FC<MyJobProps> = ({
  title,
  companyTitle,
  location,
  startDate,
  endDate,
  bulletPoints,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{companyTitle}</Typography>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="body2">{location}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="right">
            {startDate} - {endDate}
          </Typography>
        </Grid>
      </Grid>
      <IconButton onClick={handleToggle}>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <Collapse in={expanded}>
        <List dense>
          {bulletPoints.map((point, index) => (
            <ListItem key={index}>
              <ArrowRightIcon />
              <ListItemText primary={point} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default MyJob;
