import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { AppBar, IconButton, Badge, Typography } from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/logo.png";

import useStyles from "./styles";
const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h5" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Cosmetify"
              heigh="60px"
              width="60px"
              className={classes.image}
            />
            Cosmetify
          </Typography>
          <div className={classes.grow}></div>
          <div className={classes.button}>
            <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary"></Badge>
              <ShoppingCart />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
