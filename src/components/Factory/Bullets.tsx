import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  TypographyProps,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React from "react";

interface BulletsProps {
  title: string;
  variant: TypographyProps["variant"];
  data: string[];
}

const Bullets: React.FC<BulletsProps> = ({ title, variant, data }) => {
  return (
    <Container
      sx={{
        width: "100%",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Typography
        variant={variant}
        sx={{ textAlign: "left", fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <List sx={{ pl: 0 }}>
        {data.map((point, index) => (
          <ListItem
            key={index}
            sx={{ display: "flex", alignItems: "flex-start", pl: 0 }}
          >
            <ArrowRightIcon sx={{ alignSelf: "flex-start", mr: 1 }} />
            <ListItemText
              primary={point}
              primaryTypographyProps={{ variant: "body1" }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Bullets;
