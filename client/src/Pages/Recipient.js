import React from "react";
import Disaster from "./Disaster";
import Request from "./Request";
import { Paper, Grid, Typography, Box } from "@mui/material";

function Recipient() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="recipient-page">
        <Disaster />
        <Request />
      </div>
    </Box>
  );
}

export default Recipient;
