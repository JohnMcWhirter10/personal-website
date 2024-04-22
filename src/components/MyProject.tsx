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
  description: string;
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

  const Title = styled(Button)({
    textAlign: "left",
    fontWeight: "bold",
    textDecoration: "none",
    position: "relative",
    cursor: "pointer",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -2,
      width: 0,
      borderBottom: "2px solid #001F3F",
      transition: "width 0.3s ease-in-out",
    },
    "&:hover::after": {
      width: "100%",
    },
  });

  const Body = styled(Typography)({
    textAlign: "justify",
    [theme.breakpoints.up("xs")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.0rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
  });

  const Project = styled(Card)({
    maxWidth: 400,
    maxHeight: 280,
    width: "100%",
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
      <Project>
        <Preview image={imagePath} title={title} />
        <CardActions>
          <Title size="small" onClick={openModal}>
            {title}
          </Title>
        </CardActions>
      </Project>
      <Dialog fullScreen open={showModal}>
        <CloseButton onClick={closeModal}>
          <Close />
        </CloseButton>
        <Header>
          <Typography variant="h3">{title}</Typography>
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
          <Typography variant="h3" style={{ width: "100%" }}>
            Description
          </Typography>
          <Body>{description}</Body>
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
