import { Typography } from "@mui/material";

const Title = ({ children }) => {
  return (
    <Typography
      align="center"
      variant="h4"
      fontWeight="bold"
      sx={{ fontSize: { lg: "44px", xs: "30px" }, margin: "3rem" }}
      m="3"
    >
      {children}
    </Typography>
  );
};

export default Title;
