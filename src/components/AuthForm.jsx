import React from "react";
import { TextField, Button, Box } from "@mui/material";

const AuthForm = () => {
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </Box>
  );
};

export default AuthForm;
