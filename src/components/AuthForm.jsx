import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/userSlice";

import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ userName: "", password: "" });

  const { isAuthenticated, loading, userInfo, error } = useSelector(
    (state) => state.auth
  );
  console.log("userInfo", userInfo);
  console.log("error", error);
  console.log("isAuthenticated", isAuthenticated);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(userData));

    if (isAuthenticated) {
      navigate("/", { replace: true });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      }).then((res) => console.log(res));
    }
    //Clear.
    setUserData({ userName: "", password: "" });
  };

  return (
    <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="User Name"
        name="text"
        autoComplete="text"
        autoFocus
        value={userData.userName}
        onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
      />
      <TextField
        margin="normal"
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={loading}
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
    </Box>
  );
};

export default AuthForm;
