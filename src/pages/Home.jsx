import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, getProducts } from "../store/productSlice";
import { Grid, Container } from "@mui/material";
import {
  DataCard,
  HeroIMG,
  Category,
  Paginate,
  LoadingContent,
} from "../components";

const Home = () => {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(0);
  const { catg, data, loading, error } = useSelector((state) => state.products);
  console.count("Home Running...");

  const getCategoriesData = useCallback(
    () => dispatch(getCategories()),
    [dispatch]
  );

  useEffect(() => {
    getCategoriesData();
  }, [getCategoriesData]);

  const getProductsData = useMemo(() => {
    return (skip) => dispatch(getProducts(skip));
  }, [dispatch]);

  useEffect(() => {
    getProductsData(skip);
  }, [getProductsData, skip]);

  return (
    <main>
      <HeroIMG />
      <LoadingContent loading={loading} error={error}>
        <Category catg={catg} />
        <Container sx={{ padding: "0 20px" }}>
          <Grid container justify="center" spacing={3}>
            {data &&
              data.products &&
              data.products.map((value) => (
                <Grid item key={value.id} xs={12} sm={6} md={4}>
                  <DataCard test={value} />
                </Grid>
              ))}
          </Grid>
        </Container>
        <Paginate setSkip={setSkip} isLoading={loading} />
      </LoadingContent>
    </main>
  );
};

export default Home;
