import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Slide,
  styled,
  SlideProps,
} from "@mui/material";
import React, { useState } from "react";
import { useThemeContext } from "@context/ThemeContext";
import { Close } from "@mui/icons-material";
import MyLink from "./MyLink";

interface MyProjectProps {
  title: string;
  link: string;
  description: string[];
  imagePath?: string;
}

const MyProject: React.FC<MyProjectProps> = ({
  title,
  link,
  description,
  imagePath,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { theme } = useThemeContext();

  const Title = styled(Typography)({
    textAlign: "left",
    fontWeight: "bold",
    textDecoration: "none",
    position: "relative",
  });

  const Project = styled(Card)({
    cursor: "pointer",
    maxWidth: 400,
    maxHeight: 280,
    width: "100%",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  });

  const Preview = styled(CardMedia)({
    maxHeight: 250,
    width: "100%",
    aspectRatio: "16 / 9",
  });

  const CloseButton = styled(IconButton)({
    position: "absolute",
    zIndex: theme.zIndex.appBar + 1,
    top: 0,
    right: 0,
    color: theme.palette.common.white,
  });

  const Header = styled(DialogTitle)({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  });

  const Content = styled(DialogContent)({
    marginTop: "2rem",
    minHeight: "auto", // Set minimum height to auto
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Project onClick={openModal}>
        <Preview image={imagePath} title={title} />
        <CardActions>
          <Title>{title}</Title>
        </CardActions>
      </Project>
      <Dialog fullScreen open={showModal}>
        <CloseButton onClick={closeModal}>
          <Close />
        </CloseButton>
        <Header>
          <Typography variant="h5">{title}</Typography>
        </Header>
        <Content>
          {imagePath && (
            <img
              src={imagePath}
              alt={title}
              style={{
                maxHeight: 400,
                width: "auto",
                maxWidth: "90vw",
              }}
            />
          )}
          <Typography variant="h6" style={{ width: "100%" }}>
            Description
          </Typography>
          {description.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              paddingTop={"1rem"}
              textAlign={"justify"}
            >
              {paragraph}
            </Typography>
          ))}
        </Content>
        <DialogActions>
          <MyLink name={"Github"} link={link}></MyLink>
          <Button size="small" onClick={closeModal}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyProject;
