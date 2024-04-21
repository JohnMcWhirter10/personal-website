import { TabDataProps } from "@constants/tabs";
import {
  Tab,
  Tabs,
  Drawer,
  styled,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useThemeContext } from "@context/ThemeContext";

interface MyTabsProps {
  value: string;
  onChange: (_event: React.SyntheticEvent, newValue: string) => void;
  tabData: TabDataProps[];
}

const DesktopTab = styled(Tab)({
  marginLeft: 5,
  marginRight: 5,
  borderRadius: ".5em .5em 0 0",
  color: "white",
  backgroundColor: "#001F3F",
  "&:hover": {
    backgroundColor: "#003366",
  },
  "&.Mui-selected": {
    color: "white",
    backgroundColor: "#0066dd",
  },
});

const MobileTab = styled(Tab)({
  marginLeft: 0,
  height: "auto",
  width: "100%",
  maringRight: 0,
  borderRadius: 0,
  color: "#001F3F",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#001F3F",
    color: "white",
  },
});

const MobileHeader = styled(Container)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#001F3F",
  color: "white",
  justifyContent: "space-between",
  paddingLeft: "1rem",
  paddingRight: "2rem",
});

const MenuButton = styled(IconButton)({
  left: "1rem",
  padding: "0.5rem",
});

const CurrentTabTitle = styled(Typography)({
  padding: "0.5rem",
  borderRadius: "0.5rem",
  fontStyle: "italic",
});

const MyTabs: React.FC<MyTabsProps> = ({
  value: propValue,
  onChange,
  tabData,
}) => {
  const [value, setValue] = useState<string>(propValue);
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { theme } = useThemeContext();
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  useEffect(() => {
    const handleResize = () => {
      setDrawerOpen(false);
      const { sm } = theme.breakpoints.values;
      setIsSmallScreen(window.innerWidth < sm);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          <MobileHeader fixed disableGutters>
            <CurrentTabTitle variant="h1">{propValue}</CurrentTabTitle>

            <MenuButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </MenuButton>
          </MobileHeader>
          <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
            <Tabs value={value} onChange={onChange} orientation="vertical">
              {tabData.map((tab, index) => (
                <MobileTab
                  key={index}
                  label={tab.label}
                  value={tab.label}
                  onClick={toggleDrawer}
                />
              ))}
            </Tabs>
          </Drawer>
        </>
      ) : (
        <Tabs value={value} onChange={onChange}>
          {tabData.map((tab, index) => (
            <DesktopTab key={index} label={tab.label} value={tab.label} />
          ))}
        </Tabs>
      )}
    </>
  );
};

export default MyTabs;
