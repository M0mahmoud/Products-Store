import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../store/productSlice";

import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

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

          {isAuthenticated && (
            <Avatar
              onClick={() => {
                console.log("Click User");
              }}
              variant="rounded"
              sx={{
                width: 36,
                height: 36,
                bgcolor: "#ccc",
                marginRight: "10px",
                cursor: "pointer",
              }}
              alt={userInfo?.firstName}
              src={userInfo?.image}
            />
          )}
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => {
              isAuthenticated
                ? dispatch(uiAction.toggle())
                : navigate("/auth/login");
            }}
          >
            {isAuthenticated ? (
              <ShoppingCartIcon />
            ) : (
              <>
                Login <LoginIcon />
              </>
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
