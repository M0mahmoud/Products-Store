import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Snackbar,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { cartOfUser, updateCart } from "../store/userSlice";

export default function DataCard({ test }) {
  const [cartId, setCartId] = useState();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { userInfo, isAuthenticated } = useSelector((state) => state.auth);
  const { id } = userInfo;

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  const addToCartHandler = () => {
    // Get Cart Id
    dispatch(cartOfUser(id))
      .unwrap()
      .then((res) => {
        setCartId(res.id);
      });
    // Update Cart
    dispatch(
      updateCart({
        cartId: cartId,
        productId: test?.id,
        productQuantity: 1,
      })
    );
    setOpen(true);
  };

  const addToFavHandler = () => {
    console.log("Fav");
  };

  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        component="img"
        height="190"
        image={test.thumbnail}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" className="title" color="text.secondary">
          {test.title}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton aria-label="add to favorites" onClick={addToFavHandler}>
          <FavoriteIcon sx={{ color: "red" }} />
        </IconButton>
        <IconButton aria-label="add" onClick={addToCartHandler}>
          <AddShoppingCartIcon />
        </IconButton>
        <Link to={`/product/${test.id}`}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            See More <KeyboardDoubleArrowRightIcon sx={{ color: "#1976d2" }} />
          </Typography>
        </Link>
      </CardActions>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        message={isAuthenticated ? "Added To Cart" : "Login First "}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      />
    </Card>
  );
}
