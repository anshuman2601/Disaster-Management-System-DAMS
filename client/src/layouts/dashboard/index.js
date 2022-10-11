/**
=========================================================
* Disaster Response App
=========================================================
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Data

// Dashboard components

function Dashboard() {
  return (
    <Box py={3}>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Disasters />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
