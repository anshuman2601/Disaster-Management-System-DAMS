/**
=========================================================
* Disaster Response App
=========================================================
*/

// @mui material components
import Grid from "@mui/material/Grid";

// DAMS React components
import MDBox from "components/MDBox";

// DAMS React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
