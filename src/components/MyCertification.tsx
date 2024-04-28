import React, { useState } from "react";
import {
  Typography,
  Box,
  Collapse,
  List,
  ListItem,
  Card,
  CardContent,
  styled,
  Grid,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

interface MyCertificationProps {
  title: string;
  expectedDate?: string;
  description: string;
  tasks: { name: string; completed: boolean }[];
  completed: boolean;
}

const Certification = styled(Card)({
  cursor: "pointer",
  width: "100%",
  marginTop: "1rem",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const MyCertification: React.FC<MyCertificationProps> = ({
  title,
  expectedDate,
  description,
  tasks,
  completed,
}) => {
  const [open, setOpen] = useState(false);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Certification onClick={handleToggle}>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontStyle: "italic",
            textAlign: "left",
            cursor: "pointer",
          }}
        >
          {title} {completed ? <CheckCircleOutline color="success" /> : null}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {tasks.map((task, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{ marginBottom: "1rem", marginTop: "1rem" }}
              >
                <Grid
                  item
                  xs={1}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {task.completed ? (
                    <CheckCircleOutline color="success" />
                  ) : (
                    <Box width={24} height={24} />
                  )}
                </Grid>
                <Grid item xs={11}>
                  <Typography variant="body1">{task.name}</Typography>
                </Grid>
              </ListItem>
            ))}
          </List>
          {expectedDate && (
            <Typography variant="body1" fontWeight={"bold"}>
              Expected Date: {formatDate(expectedDate)}
            </Typography>
          )}
        </Collapse>
      </CardContent>
    </Certification>
  );
};

export default MyCertification;
