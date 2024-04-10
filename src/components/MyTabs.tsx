import { styled, Tab, Tabs } from "@mui/material";

const MyTabs = styled(Tabs)({
  position: "relative",
  zIndex: 1,
});

const MyTab = styled(Tab)(({ theme }) => ({
  marginLeft: 5,
  borderRadius: ".5em .5em 0 0",
  color: theme.palette.common.white,
  backgroundColor: "#001F3F",
  "&:hover": {
    backgroundColor: "#003366",
  },
  "&.Mui-selected": {
    color: theme.palette.background.paper,
  },
}));

export { MyTabs, MyTab };
