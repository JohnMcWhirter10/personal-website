import React from "react";
import MyGoal from "@components/MyGoal";

const Goals: React.FC = () => {
  return (
    <div>
      <MyGoal
        title="Fundamentals of Engineering Exam (FE)"
        description="I am currently preparing for the Fundamentals of Engineering (FE) exam, where I aim to deepen my understanding of Computer and Electrical Engineering concepts. My goal is to leverage this knowledge to contribute to the development of innovative and impactful products, ensuring their safety and value for end-users. By achieving success in the FE exam, I seek to advance my career and explore opportunities to make meaningful contributions to the field of engineering."
        startDate={new Date("2024-04-10")}
        endDate={new Date("2024-06-17")}
        endDateLabel="Exam Date"
      />
    </div>
  );
};

export default Goals;
