// MyLink.tsx
import React, { useState } from "react";
import { Button, SvgIconProps } from "@mui/material";
import RedirectModal from "./RedirectModal";

export interface MyLinkProps {
  name: string;
  link: string;
  icon?: React.ElementType<SvgIconProps>;
}

const MyLink: React.FC<MyLinkProps> = ({ name, link, icon: Icon }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Button onClick={handleClick}>
        {Icon ? <Icon /> : ""}
        {name}
      </Button>
      <RedirectModal
        name={name}
        link={link}
        open={openModal}
        setOpen={setOpenModal}
      />
    </>
  );
};

export default MyLink;
