import React from "react";
import "./FastClear.css";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackGroud from "../../../src/Asserts/backgroundClear.png";
import Clear from "../../../src/Asserts/fastClear.png";

interface typeFast {
  id: number;
  name: string;
  detail: string;
  btn1: string;
  btn2: string;
  img: string;
  backgroundImg: string;
}

const FastClear = () => {
  const ClearDate: typeFast[] = [
    {
      id: 1,
      name: "FAST, CLEAR AND AFFORDABLE SOLUTION",
      detail: "Invisible | Comfortable | 2x Faster",
      btn1: "Contact Us",
      btn2: "View Details",
      img: Clear,
      backgroundImg: BackGroud,
    },
    {
      id: 2,
      name: "FAST, CLEAR AND AFFORDABLE SOLUTION",
      detail: "Invisible | Comfortable | 2x Faster",
      btn1: "Contact Us",
      btn2: "View Details",
      img: Clear,
      backgroundImg: BackGroud,
    },
    {
      id: 3,
      name: "FAST, CLEAR AND AFFORDABLE SOLUTION",
      detail: "Invisible | Comfortable | 2x Faster",
      btn1: "Contact Us",
      btn2: "View Details",
      img: Clear,
      backgroundImg: BackGroud,
    },
  ];

  // Set the configuration for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container
      id="FastClear"
      sx={{
        backgroundImage: `url(${BackGroud})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroungRepeat: "no-repeat",
        height: "auto",
        width: "100% !important",
        maxWidth: "100% !important",
        position: "relative",
        zIndex: 9999,
        paddingLeft: { lg: "80px", md: "50px", xs: "10px", sm: "30px" },
        paddingRight: { lg: "80px", md: "50px", xs: "10px", sm: "30px" },
        paddingTop: { lg: "200px", md: "200px", xs: "100px", sm: "150px" },
        paddingBottom: { lg: "100px", md: "50px", xs: "40px", sm: "30px" },
        // padding: { lg: "100px", md: "50px", xs: "30px", sm: "30px" },
      }}
    >
      <Slider {...settings}>
        {ClearDate.map((data) => (
          <Box key={data.id}>
            <Grid
              container
              spacing={15}
              sx={{ alignItems: "center", padding: "50px" }}
            >
              <Grid item xs={12} md={6} lg={6} sx={{}}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { lg: "50px", xs: "22px", sm: "40px" },
                    fontWeight: "700",
                    fontFamily: "Bold",
                    lineHeight: { lg: "72px", xs: "50px", sm: "60px" },
                    color: "#ffffff",
                    marginBottom: "30px",
                  }}
                >
                  {data.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "30px", xs: "16px", sm: "24px" },
                    fontWeight: "500",
                    fontFamily: "Medium",
                    lineHeight: { lg: "43px" },
                    color: "#ffffff",
                    marginBottom: "50px",
                  }}
                >
                  {data.detail}
                </Typography>
                <Box sx={{ display: { lg: "flex", md: "flex", xs: "block" } }}>
                  <Button
                    sx={{
                      fontSize: { lg: "30px", md: "24", xs: "20x", sm: "24px" },
                      fontWeight: "500",
                      lineHeight: "26px",
                      bgcolor: "#F05F77",
                      color: "#ffffff",
                      fontFamily: "Medium",
                      width: {
                        lg: "233px",
                        md: "150px",
                        xs: "150px",
                        sm: "150px",
                      },
                      height: {
                        lg: "73px",
                        md: "63px",
                        xs: "43px",
                        sm: "53px",
                      },
                      marginRight: "50px",
                      marginBottom: { xs: "20px", sm: "0px" },
                      "&:hover": {
                        color: "#ffffff",
                        border: "2px solid #FF728D",
                        bgcolor: "transparent", // Change the background color on hover
                      },
                      textTransform: "capitalize",
                    }}
                  >
                    {data.btn1}
                  </Button>
                  <Button
                    sx={{
                      fontSize: {
                        lg: "30px",
                        md: "24",
                        xs: "20px",
                        sm: "24px",
                      },
                      fontWeight: "500",
                      lineHeight: "26px",
                      fontFamily: "Medium",
                      border: "1px solid #F05F77",
                      bdcolor: "tarnsparent",
                      color: "#ffffff",
                      width: {
                        lg: "233px",
                        md: "170px",
                        xs: "150px",
                        sm: "170px",
                      },
                      height: {
                        lg: "73px",
                        md: "63px",
                        xs: "43px",
                        sm: "53px",
                      },
                      "&:hover": {
                        color: "#ffffff",
                        border: "2px solid #FF728D",
                        bgcolor: "transparent", // Change the background color on hover
                      },
                      textTransform: "capitalize",
                    }}
                  >
                    {data.btn2}
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Avatar
                  src={data.img}
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
            </Grid>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};
export default FastClear;
