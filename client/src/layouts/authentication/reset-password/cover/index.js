/**
=========================================================
* Disaster Response App
=========================================================
*/

// @mui material components
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";

function Cover() {
  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <Box
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <Typography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </Typography>
          <Typography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </Typography>
        </Box>
        <Box pt={4} pb={3} px={3}>
          <Box component="form" role="form">
            <Box mb={4}>
              <Input type="email" label="Email" variant="standard" fullWidth />
            </Box>
            <Box mt={6} mb={1}>
              <Button variant="gradient" color="info" fullWidth>
                reset
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
