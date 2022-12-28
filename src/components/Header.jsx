import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { uiAction } from "../store/productSlice";

import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = true;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            align="left"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link to="/" style={{ color: "#fff" }}>
              E-Commerce
            </Link>
          </Typography>

          {auth && (
            <Button
              variant="outlined"
              color="inherit"
              endIcon={<FavoriteIcon />}
              onClick={() => navigate("/cart")}
              sx={{ marginRight: "8px" }}
            >
              Favorites
            </Button>
          )}
          <Button
            variant="outlined"
            color="inherit"
            endIcon={auth ? <ShoppingCartIcon /> : <LoginIcon />}
            onClick={() => {
              auth ? dispatch(uiAction.toggle()) : navigate("/auth/login");
            }}
          >
            {auth ? "Cart" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
