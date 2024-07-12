import React from "react";
import "./About.css";
import About1 from "../../../src/Asserts/about.png";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const About = () => {
  return (
    <Container
      id="about"
      maxWidth="xl"
      sx={{
        padding: {
          lg: "50px 100px 50px 100px",
          md: "50px 80px 50px 80px",
          sm: "50px 80px 50px 80px",
          xs: "50px 70px 50px 70px",
        },
        marginTop: "50px",
      }}
    >
      <Box sx={{ padding: { lg: "50px" } }}>
        <Grid container spacing={8} sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={6} lg={6}>
            <Avatar
              src={About1}
              alt=""
              variant="square"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "740px",
                marginBottom: "20px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "22px", md: "42px" },
                fontWeight: "700",
                fontFamily: "Bold",
                lineHeight: "1.2",
                letterSpacing: "5%",
                color: "#000000",
              }}
            >
              About ALIGNRADIANCE.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "18px" },
                fontWeight: "400",
                lineHeight: "1.5",
                fontFamily: "Regular",
                letterSpacing: "5%",
                color: "#000000",
                marginTop: "10px",
              }}
            >
              We believe that everyone deserves a perfect smile. That's why
              we've made straightening your teeth easier and cheaper than ever
              before.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "22px" },
                fontWeight: "400",
                fontFamily: "Regular",
                lineHeight: "1.5",
                letterSpacing: "7%",
                color: "#000000",
                marginTop: "40px",
              }}
            >
              We’ve seen a patient’s eyes light up while they’re wearing clear
              aligners because the outcomes are the same as braces before and
              after, and their smile has changed in a couple of months.
              Patients’ trust in us has grown day by day as we continue to
              improve. Our orthodontic braces are crack-resistant and have
              unmatched tensile strength. They are based on years of research,
              publications, and input from our orthodontists. We take
              satisfaction in seeing our patients’ smiles brighten in front of
              our eyes.
            </Typography>
            <Button
              sx={{
                fontSize: { lg: "18px", xs: "14px", sm: "16px" },
                fontWeight: "500",
                lineHeight: "26px",
                fontFamily: "Medium",
                color: "#ffffff",
                marginTop: "30px",
                bgcolor: "#F05F77",
                width: { lg: "162px", md: "140px", sm: "120px", xs: "120px" },
                height: "53px",
                "&:hover": {
                  color: "#FF728D",
                  border: "2px solid #FF728D",
                  bgcolor: "transparent", // Change the background color on hover
                },
                textTransform: "capitalize",
              }}
            >
              Learn More...
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
