"use client";

import {
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <>
      <header className="tw-flex md:tw-hidden tw-justify-between tw-items-center tw-px-8 tw-py-7">
        <h1 className="tw-text-2xl tw-text-[#252B42] tw-font-bold">Inspire</h1>
        <div className="tw-flex tw-gap-x-4">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <ShoppingCart />
          </IconButton>
          <IconButton onClick={toggleMenu}>
            <Menu />
          </IconButton>
        </div>
      </header>
      <Collapse in={openMenu}>
        <List>
          <ListItem className="tw-text-center">
            <ListItemText primary="Home" className="tw-text-[#737373]" />
          </ListItem>
          <ListItem className="tw-text-center">
            <ListItemText primary="Product" className="tw-text-[#737373]" />
          </ListItem>
          <ListItem className="tw-text-center">
            <ListItemText primary="Pricing" className="tw-text-[#737373]" />
          </ListItem>
          <ListItem className="tw-text-center">
            <ListItemText primary="Contact" className="tw-text-[#737373]" />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default HeaderMobile;
