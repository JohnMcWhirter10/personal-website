import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Avatar,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/system";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#001F3F",
  color: "white",
  "&:hover": {
    backgroundColor: "#003366",
  },
}));

const Home: React.FC = () => {
  const [showGitHubModal, setShowGitHubModal] = useState(false);
  const [showLinkedInModal, setShowLinkedInModal] = useState(false);

  const handleGitHubClick = () => {
    setShowGitHubModal(true);
  };

  const handleLinkedInClick = () => {
    setShowLinkedInModal(true);
  };

  const handleCloseGitHubModal = () => {
    setShowGitHubModal(false);
  };

  const handleCloseLinkedInModal = () => {
    setShowLinkedInModal(false);
  };

  return (
    <>
      <Typography variant="h1" align="center" gutterBottom>
        Welcome to my Webpage!
      </Typography>
      <Avatar
        alt="Professional Headshot"
        src="https://media.licdn.com/dms/image/D5603AQGtq5f19mLTDw/profile-displayphoto-shrink_800_800/0/1684845090556?e=1718236800&v=beta&t=uu6D_kWwR_mkmZ51N0gklEvZy-3vjcbaDfdnHbGDGiA"
        sx={{ width: 300, height: 300 , marginLeft:'auto', marginRight: 'auto'}}
      />
      <Typography variant="h6" align="center" gutterBottom>
        My name is <i>John Brea McWhirter</i> and I am a Computer Engineer with
        a background in Web Development, Embedded Processing, and Circuit
        Design!
      </Typography>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <CustomButton
          variant="contained"
          startIcon={<GitHubIcon />}
          onClick={handleGitHubClick}
        >
          GitHub
        </CustomButton>
        <CustomButton
          variant="contained"
          startIcon={<LinkedInIcon />}
          onClick={handleLinkedInClick}
        >
          LinkedIn
        </CustomButton>
      </div>
      <Dialog open={showGitHubModal} onClose={handleCloseGitHubModal}>
        <DialogTitle>Warning</DialogTitle>
        <DialogContent>You will be redirected to GitHub.</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseGitHubModal}>Cancel</Button>
          <Button
            href="https://github.com/JohnMcWhirter10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={showLinkedInModal} onClose={handleCloseLinkedInModal}>
        <DialogTitle>Warning</DialogTitle>
        <DialogContent>You will be redirected to LinkedIn.</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLinkedInModal}>Cancel</Button>
          <Button
            href="https://www.linkedin.com/in/johnbreamcwhirter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Home;
