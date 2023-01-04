import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

import { TextField, Button, Box } from "@mui/material";

const AuthForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ userName: "", password: "" });
  const { loading } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(userData)).then((res) => {
      res.meta.requestStatus == "fulfilled"
        ? navigate("/")
        : Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something Went Worng...! ",
          }).then((e) => console.log(e));
    });
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
        Login
      </Button>
    </Box>
  );
};

export default AuthForm;
