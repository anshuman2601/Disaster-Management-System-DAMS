import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

function Logo() {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src="assets/images/apple-icon.png" alt="logo" />
      </Link>
    </Box>
  );
}

export default Logo;
