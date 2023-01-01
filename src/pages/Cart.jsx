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
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, userCart, error, loading } = useSelector(
    (state) => state.auth
  );
  const { id } = userInfo;
  console.log("userCart", userCart);

  useEffect(() => {
    dispatch(cartOfUser(id));
    setData(userCart);
  }, []);

  return (
    <LoadingContent loading={loading} error={error}>
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
          {data?.carts[0]?.products?.length >= 0 && (
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
                {data?.carts[0]?.products?.map((row) => (
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
                ))}
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
                    {data?.carts[0]?.total}
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
                    {data?.carts[0]?.totalQuantity}
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
                    {data?.carts[0]?.totalProducts}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )}
          <Button
            variant="contained"
            color="success"
            sx={{ marginTop: "10px" }}
          >
            Checkout
          </Button>
        </Box>
      </section>
    </LoadingContent>
  );
};

export default Cart;
