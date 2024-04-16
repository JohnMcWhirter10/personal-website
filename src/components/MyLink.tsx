// GitHubLink.tsx
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  SvgIconProps,
  Typography,
} from "@mui/material";

export interface MyLinkProps {
  name: string;
  link: string;
  icon: React.ElementType<SvgIconProps>;
}

const MyLink: React.FC<MyLinkProps> = ({ name, link, icon: Icon }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <Icon />
        {name}
      </Button>
      <Dialog open={showModal} onClose={handleCloseModal}>
        <DialogTitle variant="h3">Warning</DialogTitle>
        <DialogContent>You will be redirected to {name}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>
            <Typography variant="h5">Cancel</Typography>
          </Button>
          <Button href={link} target="_blank" rel="noopener noreferrer">
            <Typography variant="h5">Continue</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyLink;
