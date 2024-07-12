import React from "react";
import "./Consultation.css";
import Consultant1 from "../../../src/Asserts/Consultant.png";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Consultation = () => {
  return (
    <Container
      id="consultation"
      sx={{
        backgroundImage: `url(${Consultant1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        maxWidth: "100% !important",
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          // maxWidth: "80% !important",
          // width: "100%",
          // margin: "auto",
          paddingLeft: {
            // xl: "15%",
            lg: "100px",
            md: "80px",
            sm: "50px",
            xs: "40px",
          },
          paddingRight: {
            // xl: "15%",
            lg: "100px",
            md: "80px",
            sm: "50px",
            xs: "40px",
          },
          paddingBottom: { xs: "30px", sm: "20px" },
        }}
      >
        <Grid container spacing={10}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ padding: { lg: "80px", md: "80px", sm: "80px", xs: "0px" } }}
          >
            {/* Column 1 */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { lg: "42px", xs: "22px", sm: "30px" },
                fontWeight: "700",
                lineHeight: { lg: "86px", xs: "40px", sm: "60px" },
                fontFamily: "Bold",
                letterSpacing: {
                  xs: "0%",
                  sm: "5%",
                },
                color: "#ffffff",
                marginBottom: "30px",
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
            >
              Book a Free
              <br />
              Consultation
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "20px" },
                fontWeight: "400",
                fontFamily: "Regular",
                lineHeight: "28px",
                letterSpaceing: "5%",
                color: "#ffffff",
                marginBottom: "50px",
              }}
            >
              We believe that everyone deserves a perfect smile. That's why
              we've made straightening your teeth easier and cheaper than ever
              before.
            </Typography>
            <Button
              sx={{
                fontSize: { lg: "18px", xs: "14px", sm: "16px" },
                fontWeight: "500",
                fontFamily: "Medium",
                lineHeight: "26px",
                bgcolor: "#F05F77",
                color: "#ffffff",
                width: { lg: "162px", md: "140px", sm: "120px", xs: "120px" },
                height: "53px",
                "&:hover": {
                  color: "#ffffff",
                  border: "2px solid #FF728D",
                  bgcolor: "transparent", // Change the background color on hover
                },
                textTransform: "capitalize",
              }}
            >
              Learn More...
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Column 2 */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: "4rem",
                  marginBottom: "30px",
                }}
              >
                <TextField
                  type="text"
                  id="firstName"
                  label="First Name"
                  variant="standard"
                  sx={{ fontSize: { lg: "22px", xs: "18px", sm: "20px" } }}
                  inputProps={{ style: { color: "white" } }} // Change text color
                  InputLabelProps={{ style: { color: "white" } }} // Change placeholder color
                  InputProps={{
                    style: {
                      borderColor: "white",
                      color: "white",
                      fontWeight: "500",
                      fontFamily: "Medium",
                      lineHeight: "31px",
                    }, // Change border color and text color
                  }}
                  fullWidth
                />
                <TextField
                  type="text"
                  id="lastName"
                  label="Last Name"
                  variant="standard"
                  sx={{ fontSize: { lg: "22px", xs: "18px", sm: "20px" } }}
                  fullWidth
                  inputProps={{ style: { color: "white" } }} // Change text color
                  InputLabelProps={{ style: { color: "white" } }} // Change placeholder color
                  InputProps={{
                    style: {
                      borderColor: "white",
                      color: "white",
                      fontWeight: "500",
                      fontFamily: "Medium",
                      lineHeight: "31px",
                    }, // Change border color and text color
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: "4rem",
                  marginBottom: "30px",
                }}
              >
                <TextField
                  type="email"
                  id="email"
                  label="Email"
                  variant="standard"
                  sx={{ fontSize: { lg: "22px", xs: "18px", sm: "20px" } }}
                  fullWidth
                  inputProps={{ style: { color: "white" } }} // Change text color
                  InputLabelProps={{ style: { color: "white" } }} // Change placeholder color
                  InputProps={{
                    style: {
                      borderColor: "white",
                      color: "white",
                      fontWeight: "500",
                      fontFamily: "Medium",
                      lineHeight: "31px",
                    }, // Change border color and text color
                  }}
                />
                <TextField
                  type="text"
                  id="phone"
                  label="Phone No"
                  variant="standard"
                  fullWidth
                  sx={{ fontSize: { lg: "22px", xs: "18px", sm: "20px" } }}
                  inputProps={{
                    style: { color: "white" },
                    inputMode: "numeric", // Only allow number input
                  }}
                  InputLabelProps={{ style: { color: "white" } }} // Change placeholder color
                  InputProps={{
                    style: {
                      borderBottomColor: "white", // Change underline color
                      color: "white",
                      fontWeight: "500",
                      fontFamily: "Medium",
                      lineHeight: "31px", // Change text color
                    },
                    onKeyPress: (event) => {
                      const keyCode = event.which || event.keyCode;
                      if (keyCode < 48 || keyCode > 57) {
                        event.preventDefault(); // Prevent input of alphabetic characters
                      }
                    },
                  }}
                />
              </Box>
              <Box marginBottom="50px">
                <TextField
                  type="number"
                  id="message"
                  label="Message"
                  multiline
                  rows={4}
                  variant="standard"
                  sx={{ fontSize: { lg: "22px", xs: "18px", sm: "20px" } }}
                  inputProps={{ style: { color: "white" } }} // Change text color
                  InputLabelProps={{ style: { color: "white" } }} // Change placeholder color
                  InputProps={{
                    style: {
                      borderColor: "white",
                      color: "white",
                      fontWeight: "500",
                      fontFamily: "Medium",
                      lineHeight: "31px",
                    }, // Change border color and text color
                  }}
                  fullWidth
                />
              </Box>
              <Box
                sx={{
                  textAlign: "end",
                }}
              >
                <Button
                  sx={{
                    fontSize: { lg: "18px", xs: "14px", sm: "16px" },
                    fontWeight: "500",
                    fontFamily: "Medium",
                    lineHeight: "26px",
                    bgcolor: "#F05F77",
                    color: "#ffffff",
                    width: {
                      lg: "162px",
                      md: "140px",
                      sm: "120px",
                      xs: "120px",
                    },
                    height: "53px",
                    "&:hover": {
                      color: "#ffffff",
                      border: "2px solid #FF728D",
                      bgcolor: "transparent", // Change the background color on hover
                    },
                    textTransform: "capitalize",
                  }}
                >
                  Send Request
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Consultation;
