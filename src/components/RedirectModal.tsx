// RedirectModal.tsx
import { useThemeContext } from "@context/ThemeContext";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

interface RedirectModalProps {
  name: string;
  link: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RedirectModal: React.FC<RedirectModalProps> = ({
  name,
  link,
  open,
  setOpen,
}) => {
  const { theme } = useThemeContext();

  const RedirectDialog = styled(Dialog)({
    width: "100%",
  });

  const Title = styled(DialogTitle)({
    color: theme.palette.common.white,
    backgroundColor: theme.palette.warning.main,
  });

  const Content = styled(DialogContent)({
    margin: "2rem 2rem 0 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleContinue = () => {
    window.open(link, "_blank");
    setOpen(false);
  };

  return (
    <RedirectDialog open={open} onClose={handleCloseModal}>
      <Title variant="h5">Warning</Title>
      <Content>
        <Typography variant="h5">You will be redirected to {name}</Typography>
      </Content>
      <DialogActions>
        <Button onClick={handleCloseModal}>Cancel</Button>
        <Button onClick={handleContinue}>Continue</Button>
      </DialogActions>
    </RedirectDialog>
  );
};

export default RedirectModal;
