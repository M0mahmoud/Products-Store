import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleproduct } from "../store/productSlice";

import { Button, Paper, Box, Grid, Typography } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getSingleproduct(id));
  }, []);

  return (
    <Grid container component="main" className="vhHeight">
      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${product.thumbnail})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
        }}
      />
      <Grid item xs={12} sm={8} md={6} component={Paper}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ fontWeight: "800" }}
            mb={1}
            color="primary"
          >
            {product.title}
          </Typography>
          <Typography align="left" variant="p" mb={3}>
            {product.brand} Brand
          </Typography>

          <Box component="div" variant="h5">
            <Typography variant="h6">PRODUCT INFO</Typography>
            <Typography variant="p" component="div">
              {product.description}
            </Typography>
          </Box>

          <Grid container>
            <Grid item xs>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Buy Now
              </Button>
            </Grid>
            <Grid item>
              <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }}>
                Add To Cart
              </Button>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs>
              <Grid container direction="column" mt={5}>
                <Grid item xs>
                  <Typography variant="h5">Price</Typography>
                </Grid>
                <Grid item>
                  <Typography color="primary" variant="h5">
                    ${product.price}
                    <br />
                    <span style={{ fontSize: "18px" }}>
                      {product.discountPercentage}% Discount
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" mt={5}>
                <Grid item xs>
                  <Typography variant="h5">Rating</Typography>
                </Grid>
                <Grid item>
                  <Typography color="primary" variant="h5">
                    {product.rating}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Typography mt={5}>
            <Link to={`/category/${product.category}`} variant="h6">
              {product.category} Category
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};


export default ProductDetails;
