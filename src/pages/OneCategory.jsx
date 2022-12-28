import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import { DataCard, Title } from "../components";

const OneCategory = () => {
  const [categorieData, setCategorieData] = useState();
  const { categoryName } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        return setCategorieData(data);
      });
  }, []);

  return (
    <>
      <Title>{categoryName} Categories</Title>

      <Container sx={{ padding: "0 20px" }}>
        <Grid container justify="center" spacing={3}>
          {categorieData?.products?.map((value) => (
            <Grid item key={value.id} xs={12} sm={6} md={4}>
              <DataCard test={value} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default OneCategory;
