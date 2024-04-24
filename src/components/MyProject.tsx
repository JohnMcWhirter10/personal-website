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
  styled,
  Link,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useThemeContext } from "@context/ThemeContext";
import { Close } from "@mui/icons-material";
import RedirectModal from "./RedirectModal";

interface MyProjectProps {
  title: string;
  link?: string;
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
  const [redirectModal, setRedirectModal] = useState<boolean>(false);
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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openRedirectModal = () => {
    setRedirectModal(true);
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
        <IconButton
          sx={{
            position: "absolute",
            zIndex: theme.zIndex.appBar + 1,
            top: 0,
            right: 0,
            color: theme.palette.common.white,
          }}
          onClick={closeModal}
        >
          <Close />
        </IconButton>
        <DialogTitle
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
          }}
        >
          <Typography variant="h5">{title}</Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            marginTop: "2rem",
            minHeight: "auto",
            display: "flex",
            flexDirection: "column",
            overflowX: "hidden",
            alignItems: "center",
          }}
        >
          {imagePath && (
            <img
              src={imagePath}
              alt={title}
              style={{ maxHeight: 400, width: "auto", maxWidth: "90vw" }}
            />
          )}
          <Typography variant="h4" sx={{ width: "100%" }}>
            Description
          </Typography>
          {description.map((paragraph, index) => (
            <Typography
              key={index}
              variant="h6"
              sx={{ paddingTop: "1rem", width: "100%" }}
            >
              {paragraph}
            </Typography>
          ))}
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          {link ? (
            <Button onClick={openRedirectModal}>
              <Typography variant="h6">Visit Repository</Typography>
            </Button>
          ) : (
            ""
          )}
        </DialogActions>
      </Dialog>
      {link ? (
        <RedirectModal
          name={"Github"}
          link={link}
          open={redirectModal}
          setOpen={setRedirectModal}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default MyProject;
