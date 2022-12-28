import React from "react";
import { Box, Typography, List, Divider, ListItem } from "@mui/material";
import {DataCard} from "../components";

const testData = {
  id: 9,
  title: "Infinix INBOOK",
  thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
};

const Cart = () => {
  return (
    <section>
      <Box sx={{ width: "350px", padding: "1rem" }} role="presentation">
        <Typography
          variant="h4"
          color="primary"
          sx={{ padding: "1rem", fontWeight: "bold" }}
        >
          Your Cart
        </Typography>
        <Divider />
        <List>
          {["dataFromAPI", "dataFromAPI"].map((text) => (
            <ListItem key={text} disablePadding>
              <DataCard key={text} test={testData} />
            </ListItem>
          ))}
        </List>
      </Box>
    </section>
  );
};

export default Cart;
