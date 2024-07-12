import React from "react";
import Facebook from "../../../src/Asserts/ficon.png";
import Linked from "../../../src/Asserts/licon.png";
import Twiter from "../../../src/Asserts/ticon.png";
import Youtube from "../../../src/Asserts/yicon.png";
import Arrow from "../../../src/Asserts/arrowfooter.png";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./Footer.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Footer = () => {
  return (
    <Container
      className="parentContainer"
      sx={{
        bgcolor: "#ffffff",
        width: "100%",
        maxWidth: "100% !important",
        padding: { lg: "30px", md: "30px", sm: "30px", xs: "50px" },
        "@media (min-width: 600px)": {
          padding: "40px 60px 20px 60px",
        },
        "@media (min-width: 960px)": {
          padding: "60px 80px 20px 80px",
        },
        "@media (min-width: 1280px)": {
          padding: "80px 100px 20px 100px",
        },
      }}
    >
      <Box sx={{ paddingBottom: "20px" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={3}>
            {/* Column 1 */}
            <Typography
              variant="h4"
              sx={{
                fontFamily: "ExtraBold",
                fontSize: { lg: "32px", md: "24px", xs: "24px", sm: "24px" },
                fontWeight: "800",
                lineHeight: "46px",
                color: "#F05F77",
              }}
            >
              ALIGNRADIANCE
            </Typography>
            <Typography
              sx={{
                fontFamily: "Regular",
                fontSize: { lg: "20px", md: "18px", xs: "18px", sm: "16px" },
                fontWeight: "400",
                lineHeight: "25px",
                color: "#000000",
              }}
              my="20px"
            >
              We Provide provides premium quality, clearest and affordable
              orthodontic aligners treatment globally.
            </Typography>
            <Box>
              <Stack direction="row" spacing={2}>
                <Avatar
                  src={Facebook}
                  alt="Facebook"
                  sx={{ width: "30px", height: "30px" }}
                />
                <Avatar
                  src={Linked}
                  alt="LinkedIn"
                  sx={{ width: "30px", height: "30px" }}
                />
                <Avatar
                  src={Twiter}
                  alt="Twitter"
                  sx={{ width: "30px", height: "30px" }}
                />
                <Avatar
                  src={Youtube}
                  alt="YouTube"
                  sx={{ width: "30px", height: "30px" }}
                />
              </Stack>
            </Box>
            {/* Add your content for Column 1 */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {/* Column 2 */}
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Bold",
                fontSize: { lg: "22px", md: "20px", xs: "18px", sm: "18px" },
                fontWeight: "700",
                lineHeight: "18px",
                color: "#F05F77",
              }}
            >
              Quick Links{" "}
            </Typography>
            <Box my="20px" className="footerlink">
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar
                  src={Arrow}
                  alt="Arrow"
                  sx={{ width: "4px", height: "10px" }}
                />
                <Typography
                  noWrap
                  sx={{
                    fontFamily: "Regular",
                    fontSize: { lg: "18px", xs: "16px", sm: "14px" },
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#000000",
                  }}
                >
                  Home
                </Typography>
              </Stack>
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar
                  src={Arrow}
                  alt="Arrow"
                  sx={{ width: "4px", height: "10px" }}
                />
                <Typography
                  noWrap
                  sx={{
                    fontFamily: "Regular",
                    fontSize: { lg: "18px", xs: "16px", sm: "14px" },
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#000000",
                  }}
                >
                  What we treat
                </Typography>
              </Stack>
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar
                  src={Arrow}
                  alt="Arrow"
                  sx={{ width: "4px", height: "10px" }}
                />
                <Typography
                  noWrap
                  sx={{
                    fontFamily: "Regular",
                    fontSize: { lg: "18px", xs: "16px", sm: "14px" },
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#000000",
                  }}
                >
                  About Us
                </Typography>
              </Stack>
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar
                  src={Arrow}
                  alt="Arrow"
                  sx={{ width: "4px", height: "10px" }}
                />
                <Typography
                  noWrap
                  sx={{
                    fontFamily: "Regular",
                    fontSize: { lg: "18px", xs: "16px", sm: "14px" },
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#000000",
                  }}
                >
                  Testimonials
                </Typography>
              </Stack>
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar
                  src={Arrow}
                  alt="Arrow"
                  sx={{ width: "4px", height: "10px" }}
                />
                <Typography
                  noWrap
                  sx={{
                    fontFamily: "Regular",
                    fontSize: { lg: "18px", xs: "16px", sm: "14px" },
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#000000",
                  }}
                >
                  Gallery/Results
                </Typography>
              </Stack>
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar
                  src={Arrow}
                  alt="Arrow"
                  sx={{ width: "4px", height: "10px" }}
                />
                <Typography
                  noWrap
                  sx={{
                    fontFamily: "Regular",
                    fontSize: { lg: "18px", xs: "16px", sm: "14px" },
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#000000",
                  }}
                >
                  Blog
                </Typography>
              </Stack>
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar
                  src={Arrow}
                  alt="Arrow"
                  sx={{ width: "4px", height: "10px" }}
                />
                <Typography
                  noWrap
                  sx={{
                    fontFamily: "Regular",
                    fontSize: { lg: "18px", xs: "16px", sm: "14px" },
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#000000",
                  }}
                >
                  Conatct Us
                </Typography>
              </Stack>
            </Box>
            {/* Add your content for Column 2 */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              {/* Column 3 */}
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Bold",
                  fontSize: { lg: "22px", md: "20px", xs: "18px", sm: "18px" },
                  fontWeight: "700",
                  lineHeight: "18px",
                  color: "#F05F77",
                }}
              >
                Contact Details
              </Typography>
              <Box my="20px" className="footerlink">
                <Stack spacing={2} direction="row" alignItems="center">
                  <Avatar
                    src={Arrow}
                    alt="Arrow"
                    sx={{ width: "4px", height: "10px" }}
                  />
                  <Typography
                    noWrap
                    sx={{
                      fontFamily: "Regular",
                      fontSize: { lg: "18px", xs: "16px", sm: "14px" },
                      fontWeight: "400",
                      lineHeight: "18px",
                      color: "#000000",
                    }}
                  >
                    Call Us: 042 111 333 276
                  </Typography>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Avatar
                    src={Arrow}
                    alt="Arrow"
                    sx={{ width: "4px", height: "10px" }}
                  />
                  <Typography
                    noWrap
                    sx={{
                      fontFamily: "Regular",
                      fontSize: { lg: "18px", xs: "16px", sm: "14px" },
                      fontWeight: "400",
                      lineHeight: "18px",
                      color: "#000000",
                    }}
                  >
                    Support@example.com
                  </Typography>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Avatar
                    src={Arrow}
                    alt="Arrow"
                    sx={{ width: "4px", height: "10px", marginTop: "-30px" }}
                  />
                  <Typography
                    noWrap
                    sx={{
                      fontFamily: "Regular",
                      fontSize: { lg: "18px", xs: "16px", sm: "14px" },
                      fontWeight: "400",
                      lineHeight: "30px",
                      color: "#000000",
                    }}
                  >
                    Address: 6N, Main Boulevard
                    <br />
                    Johar Town, Lahore
                  </Typography>
                </Stack>
              </Box>
            </Box>
            {/* Add your content for Column 3 */}
          </Grid>
          <Grid item xs={12} sm={6} md={3} columnSpacing={4}>
            {/* Column 4 */}
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bold",
                fontSize: { lg: "22px", md: "20px", xs: "18px", sm: "18px" },
                fontWeight: "700",
                lineHeight: "18px",
                color: "#F05F77",
              }}
            >
              Newsletter
            </Typography>
            <Box
              my="20px"
              sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <TextField
                id="outlined-basic"
                label="Enter Email Address"
                variant="outlined"
              />
              <Button
                sx={{
                  fontSize: { lg: "18px", xs: "14px", sm: "16px" },
                  fontWeight: "500",
                  fontFamily: "Medium",
                  lineHeight: "26px",
                  bgcolor: "#F05F77",
                  color: "#ffffff",
                  width: { lg: "162px", md: "140px", sm: "120px", xs: "100px" },
                  height: "53px",
                  "&:hover": {
                    color: "#FF728D",
                    border: "2px solid #FF728D",
                    bgcolor: "transparent", // Change the background color on hover
                  },
                  textTransform: "capitalize",
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Stack spacing={2} direction="row" alignItems="center">
              <Checkbox
                {...label}
                sx={{ border: "#F05F77", margin: "-20px -10px 0px -10px" }}
              />
              <Typography
                noWrap
                sx={{
                  fontFamily: "Regular",
                  fontSize: { lg: "18px", xs: "16px", sm: "14px" },
                  fontWeight: "400",
                  lineHeight: "30px",
                  color: "#000000",
                }}
              >
                I have read and Accept all
                <Typography
                  sx={{
                    color: "#F05F77",
                    fontFamily: "Regular",
                    fontSize: { lg: "18px", xs: "16px", sm: "14px" },
                    fontWeight: "400",
                    lineHeight: "18px",
                  }}
                >
                  {" "}
                  Term and Conditions.
                </Typography>
              </Typography>
            </Stack>
            {/* Add your content for Column 4 */}
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: "50px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            flexDirection: "row",
            coloe: "#000000",
            fontFamily: "Regular",
            fontSize: { lg: "18px", xs: "14px", sm: "16px" },
            fontWeight: "400",
            lineHeight: "26px",
          }}
        >
          © 2023 Copyright
          <Typography
            mx="10px"
            sx={{
              color: "#000000",
              fontFamily: "Bold",
              fontSize: { lg: "18px", xs: "14px", sm: "16px" },
              fontWeight: "700",
              lineHeight: "26px",
            }}
          >
            Alignradiance
          </Typography>{" "}
          2021. © All Right Reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
