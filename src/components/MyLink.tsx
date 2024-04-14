// GitHubLink.tsx
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  SvgIconProps,
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
        <DialogTitle>Warning</DialogTitle>
        <DialogContent>You will be redirected to {name}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button href={link} target="_blank" rel="noopener noreferrer">
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyLink;
