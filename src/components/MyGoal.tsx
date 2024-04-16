import React from "react";
import { Typography, LinearProgress, Box } from "@mui/material";

interface MyGoalProps {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  startDateLabel?: string;
  endDateLabel?: string;
}

const MyGoal: React.FC<MyGoalProps> = ({
  title,
  description,
  startDate,
  endDate,
  startDateLabel = "Start Date",
  endDateLabel = "End Date",
}) => {
  const currentDate = new Date();
  const totalDuration = endDate.getTime() - startDate.getTime();
  const elapsedDuration = currentDate.getTime() - startDate.getTime();
  const progress = totalDuration ? (elapsedDuration / totalDuration) * 100 : 0;

  return (
    <Box marginTop={"2rem"}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", fontStyle: "italic", textAlign: "left" }}
      >
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: 10 }}
      />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop={1}
      >
        <Box>
          <Typography variant="h5">
            <b>{startDateLabel}</b>: {startDate.toLocaleDateString()}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">
            <b>{endDateLabel}</b>: {endDate.toLocaleDateString()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MyGoal;
