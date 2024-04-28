import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Collapse,
  styled,
  Card,
  CardContent,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface MyJobProps {
  title: string;
  companyTitle: string;
  location: string;
  startDate: string;
  endDate?: string;
  bulletPoints?: string[];
}

const Job = styled(Card)(({ hasBullets }: { hasBullets: boolean }) => ({
  cursor: hasBullets ? "pointer" : "",
  width: "100%",
  marginTop: "1rem",
  marginBottom: "1rem",
  transition: hasBullets ? "transform 0.3s ease-in-out" : "",
  "&:hover": {
    transform: hasBullets ? "scale(1.05)" : "",
  },
}));

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
    <Job
      hasBullets={bulletPoints ? true : false}
      onClick={bulletPoints ? handleToggle : () => {}}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom align="left">
          <b>{title}</b>
        </Typography>
        <Typography variant="body1" align="left">
          {companyTitle}
        </Typography>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="body1" align="left">
              {location}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="right">
              {startDate}
              {endDate ? ` - ${endDate}` : null}
            </Typography>
          </Grid>
        </Grid>

        {bulletPoints ? (
          <Collapse in={expanded}>
            <List>
              {bulletPoints.map((point, index) => (
                <ListItem
                  key={index}
                  sx={{ display: "flex", alignItems: "flex-start" }}
                >
                  <ArrowRightIcon
                    sx={{
                      alignSelf: "flex-start",
                      fontSize: "1.2rem",
                    }}
                  />
                  <ListItemText
                    primary={point}
                    primaryTypographyProps={{ variant: "body1" }}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        ) : null}
      </CardContent>
    </Job>
  );
};

export default MyJob;
