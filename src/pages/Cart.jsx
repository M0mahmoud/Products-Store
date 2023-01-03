import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartOfUser } from "../store/userSlice";
import { LoadingContent } from "../components";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, userCart, error, loading } = useSelector(
    (state) => state.auth
  );
  const { id } = userInfo;
  const { products, total, totalQuantity, totalProducts } = userCart;

  console.log("totalQuantity", totalQuantity);
  console.log("total", total);
  console.log("products", products);

  useEffect(() => {
    dispatch(cartOfUser(id));
  }, [totalProducts]);

  return (
    <>
      <LoadingContent loading={loading} error={error}>
        {!loading && (
          <section>
            <Box sx={{ width: "500px", padding: "1rem" }} role="presentation">
              <Typography
                variant="h4"
                color="primary"
                sx={{ padding: "12px", fontWeight: "bold" }}
              >
                Your Cart
              </Typography>
              <Divider />
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {//   Error
                  products.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell
                        component="th"
                        scope="row"
                        onClick={() => navigate(`/product/${row.id}`)}
                        sx={{
                          cursor: "pointer",
                          color: "#1976d2",
                          fontWeight: "bold",
                        }}
                      >
                        {row.title}
                      </TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">{row.total}</TableCell>
                    </TableRow>
                  ))} */}
                  <TableRow>
                    <TableCell
                      sx={{ bgcolor: "#1976d2", color: "#fff" }}
                      colSpan={3}
                    >
                      Total:
                    </TableCell>
                    <TableCell
                      sx={{ bgcolor: "#1976d2", color: "#fff" }}
                      align="right"
                    >
                      {total}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ bgcolor: "#1976d2", color: "#fff" }}
                      colSpan={3}
                    >
                      Total Quantity:
                    </TableCell>
                    <TableCell
                      sx={{ bgcolor: "#1976d2", color: "#fff" }}
                      align="right"
                    >
                      {totalQuantity}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ bgcolor: "#1976d2", color: "#fff" }}
                      colSpan={3}
                    >
                      Total Products:
                    </TableCell>
                    <TableCell
                      sx={{ bgcolor: "#1976d2", color: "#fff" }}
                      align="right"
                    >
                      {totalProducts}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button
                variant="contained"
                color="success"
                sx={{ marginTop: "10px" }}
              >
                Checkout
              </Button>
            </Box>
          </section>
        )}
      </LoadingContent>
    </>
  );
};

export default Cart;
