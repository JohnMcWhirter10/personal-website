import RedirectModal from "@components/RedirectModal";
import {
  Button,
  Card,
  CardContent,
  Container,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface EducationProps {}

const EducationContainer = styled(Container)({
  minWidth: "100%",
});

const GraduationDate = styled(Typography)(({ theme }) => ({}));

const University = styled(Card)(({ theme }) => ({
  width: "100%",
  cursor: "pointer",
  marginTop: "1rem",
  marginBottom: "1rem",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const UniversityName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: "10px",
}));

const Degree = styled(Typography)(({ theme }) => ({
  marginBottom: "8px",
}));

const CollegeEducation: React.FC<{
  collegeName: string;
  degree: string;
  graduationDate: string;
  primaryColor: string;
  secondaryColor: string;
  link: string;
}> = ({
  collegeName,
  degree,
  graduationDate,
  primaryColor,
  secondaryColor,
  link,
}) => {
  const StyledCollege = styled(University)({
    backgroundColor: primaryColor,
    color: secondaryColor,
  });
  const [redirectModal, setRedirectModal] = useState<boolean>(false);

  const openRedirectModal = () => {
    setRedirectModal(true);
  };

  return (
    <>
      <StyledCollege onClick={openRedirectModal}>
        <CardContent>
          <UniversityName variant="h6">{collegeName}</UniversityName>
          <Degree variant="body1">{degree}</Degree>
          <GraduationDate variant="body2">{graduationDate}</GraduationDate>
        </CardContent>
      </StyledCollege>
      <RedirectModal
        name={collegeName}
        link={link}
        open={redirectModal}
        setOpen={setRedirectModal}
      />
    </>
  );
};

const Education: React.FC<EducationProps> = () => {
  return (
    <EducationContainer>
      <CollegeEducation
        collegeName="Texas A&M University"
        degree="Bachelor of Science in Computer and Electrical Engineering"
        graduationDate="Graduated Class of 2023"
        primaryColor="#500000"
        secondaryColor="#ffffff"
        link="https://engineering.tamu.edu/electrical/academics/degrees/undergraduate/bs-ce.html"
      />
      <CollegeEducation
        collegeName="South Plains College"
        degree="Pre-Engineering"
        graduationDate="Completed Coursework relevant to Engineering, Transferred to Blinn College"
        primaryColor="#f68523"
        secondaryColor="#01355a"
        link="https://www.southplainscollege.edu/"
      />
      <CollegeEducation
        collegeName="Blinn College"
        degree="Pre-Engineering"
        graduationDate="Completed Coursework relevant to Computer and Electrical Engineering, Transferred to Texas A&M University"
        primaryColor="#0a2140"
        secondaryColor="#fdb814"
        link="https://www.blinn.edu/"
      />
    </EducationContainer>
  );
};

export default Education;
