import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, getProducts, uiAction } from "../store/productSlice";

import { Grid, Container, Drawer } from "@mui/material";

import {
  DataCard,
  HeroIMG,
  Category,
  Paginate,
  LoadingContent,
} from "../components";
import Cart from "./Cart";

const Home = () => {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(0);
  const { catg, data, loading, error, cartIsVisible } = useSelector(
    (state) => state.products
  );
  console.count("Home Running...");

  const toggleDrawer = () => {
    dispatch(uiAction.toggle());
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(getProducts(skip));
  }, [skip]);

  return (
    <main>
      <HeroIMG />
      <LoadingContent loading={loading} error={error}>
        <Category catg={catg} />

        <Container sx={{ padding: "0 20px" }}>
          <Grid container justify="center" spacing={3}>
            {data?.products?.map((value) => (
              <Grid item key={value.id} xs={12} sm={6} md={4}>
                <DataCard test={value} />
              </Grid>
            ))}
          </Grid>
        </Container>

        <Paginate setSkip={setSkip} />
      </LoadingContent>
      <Drawer anchor="right" open={cartIsVisible} onClose={toggleDrawer}>
        <Cart />
      </Drawer>
    </main>
  );
};

export default Home;
