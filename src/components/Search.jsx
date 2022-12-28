import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "200px",
        height: "35px",
        backgroundColor: "transparent",
        borderRadius:'20px',
        border:'1px solid #fff',
        boxShadow:'none',
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="search Product" />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon color="#fff"/>
      </IconButton> 
    </Paper>
  );
}
