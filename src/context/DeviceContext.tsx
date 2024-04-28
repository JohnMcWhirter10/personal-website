import React, { createContext, useContext, useEffect, useState } from "react";
import { useThemeContext } from "./ThemeContext";

interface DeviceContextType {
  isMobile: boolean;
}

const DeviceContext = createContext<DeviceContextType>({ isMobile: false });

export const useDeviceContext = () => useContext(DeviceContext);

export const Device: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { theme } = useThemeContext();

  useEffect(() => {
    const handleResize = () => {
      const { sm } = theme.breakpoints.values;
      setIsMobile(window.innerWidth < sm);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};
