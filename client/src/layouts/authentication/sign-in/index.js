/**
=========================================================
* Disaster Response App
=========================================================
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <Card>
      <Box
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
        mx={2}
        mt={-3}
        p={2}
        mb={1}
        textAlign="center"
      >
        <Typography variant="h4" fontWeight="medium" color="white" mt={1}>
          Sign in
        </Typography>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
          <Grid item xs={2}>
            <Typography component={MuiLink} href="#" variant="body1" color="white">
              <FacebookIcon color="inherit" />
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography component={MuiLink} href="#" variant="body1" color="white">
              <GitHubIcon color="inherit" />
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography component={MuiLink} href="#" variant="body1" color="white">
              <GoogleIcon color="inherit" />
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box pt={4} pb={3} px={3}>
        <Box component="form" role="form">
          <Box mb={2}>
            <Input type="email" label="Username" fullWidth />
          </Box>
          <Box mb={2}>
            <Input type="password" label="Password" fullWidth />
          </Box>
          <Box display="flex" alignItems="center" ml={-1}>
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <Typography
              variant="button"
              fontWeight="regular"
              color="text"
              onClick={handleSetRememberMe}
              sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
            >
              &nbsp;&nbsp;Remember me
            </Typography>
          </Box>
          <Box mt={4} mb={1}>
            <Button variant="gradient" color="info" fullWidth>
              sign in
            </Button>
          </Box>
          <Box mt={3} mb={1} textAlign="center">
            <Typography variant="button" color="text">
              Don&apos;t have an account?{" "}
              <Typography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign up
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default Basic;
