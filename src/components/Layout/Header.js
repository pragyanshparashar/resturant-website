import React, { useState } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/icons-material/IconButton";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../../Styles/HeadersStyles.css";

const Header = () => {
  const [mobileopen, setmobileopen] = useState(false);

  const handelDrawertoggel = () => {
    setmobileopen(!mobileopen);
  };

  const drawer = (
    <Box onClick={handelDrawertoggel} sx={{ textAlign: "center" }}>
      <Typography
        color={"red"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        Resturant Website
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="success"
              aria-label="menu-book"
              edge="start"
              sx={{ mg: 2, display: { sm: "none" } }}
              onClick={handelDrawertoggel}
            >
              <MenuBookIcon />
            </IconButton>
            <FastfoodIcon />
            <Typography
              color={"red"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Resturant Website
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="div">
          <Drawer
            variant="temporary"
            open={mobileopen}
            onclose={handelDrawertoggel}
            sx={{
              display: { xs: "block", sm: "none" },
              "&.muiDrawer-paper": { boxsizing: "border-box", width: "240px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
