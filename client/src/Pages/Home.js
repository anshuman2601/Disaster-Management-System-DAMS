import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Disaster from "./Disaster";
import Items from "./Items";
import Request from "./Request";
import Response from "./Response";
import Map from "./Map";

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="home-page">
        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <Typography>
              <h1>DAMS Admin Dashboard</h1>
            </Typography>
          </Grid>
        </Grid>
        <Disaster />
        <Items />
        <Request />
        <Map />
      </div>
    </Box>
  );
}

export default Home;

// https://www.bezkoder.com/react-material-ui-examples-crud/
