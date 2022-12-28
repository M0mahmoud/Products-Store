import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/user-context";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function DataCard({ test }) {
  const { addItem } = useContext(CartContext);

  const addToFavorites = () => {
    console.log("Adding favorites");
  };

  const addToCartHandler = () => {
    addItem(test);
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
        <IconButton aria-label="add to favorites" onClick={addToFavorites}>
          <FavoriteIcon /*sx={{ color: "red" }}*/ />
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
    </Card>
  );
}
