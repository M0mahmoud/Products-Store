import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Container, Avatar, CssBaseline, Box, Typography } from "@mui/material";

import {AuthForm} from "../components";

function Login() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "blue" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <AuthForm />
      </Box>
    </Container>
  );
}

export default Login;
