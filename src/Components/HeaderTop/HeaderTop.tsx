import React from "react";
import "./HeaderTop.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Avatar, Stack, Typography } from "@mui/material";
import Location from "../../../src/Asserts/topheader1.png";
import Phone from "../../../src/Asserts/topheader2.png";

const HeaderTop = () => {
  return (
    <>
      <Container
        sx={{
          width: "100%",
          maxWidth: {
            lg: "100% !important",
            md: "100% !important",
            sm: "100% !important",
            xs: "100% !important",
          },
          bgcolor: " #484848",
          padding: { lg: "20px", md: "20px", sm: "10px", xs: "10px" },
        }}
      >
        <Box
          className="HeaderTop"
          style={{
            maxWidth: "1536px",
            margin: "auto",
            paddingLeft: "8%",
            paddingRight: "8%",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              width: { sm: "100%", xs: "100%" },
              // padding: {
              //   lg: "10px 100px 10px 100px",
              //   md: "10px 80px 10px 80px",
              //   sm: "0px 25% 0px 25%",
              //   xs: "0px 10% 0px 10%",
              //   xl: "0px 350px 0px 350px",
              // },

              display: { lg: "flex", md: "flex", sm: "block", xs: "block" },
            }}
          >
            <Grid item xs={12} lg={4} md={4}>
              <Stack spacing={1} direction="row" alignItems="center">
                <Avatar
                  src={Location}
                  alt="Arrow"
                  sx={{ width: "17px", height: "17px" }}
                />
                <Typography
                  noWrap
                  sx={{
                    fontFamily: "Medium",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "30px",
                  }}
                >
                  {" "}
                  Unit 8, Elder Way, Waterside Drive, Slough. SL3 6EP
                </Typography>
              </Stack>{" "}
            </Grid>
            <Grid item xs={12} lg={8} md={8}>
              <Stack spacing={1} direction="row" alignItems="center">
                <Avatar
                  src={Phone}
                  alt="Arrow"
                  sx={{ width: "17px", height: "17px" }}
                />
                <Typography
                  noWrap
                  sx={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "Medium",
                    lineHeight: "30px",
                  }}
                >
                  017 5342 4290
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default HeaderTop;
