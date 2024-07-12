import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial1 from "../../../src/Asserts/testimonial.png";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";

interface TypeTestimonial {
  id: number;
  img: string;
  name: string;
  city: string;
  description: string;
}
const Testimonial = () => {
  const Card: TypeTestimonial[] = [
    {
      id: 1,
      img: Testimonial1,
      name: "Hamish French",
      city: "New York",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \n\n incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 2,
      img: Testimonial1,
      name: "Asad Ullah Tariq",
      city: "Hafizabad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \n\n incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 3,
      img: Testimonial1,
      name: "Mudassar Sharif",
      city: "Lahore",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \n\n incididunt ut labore et dolore magna aliqua",
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
      id="testimonial"
      sx={{
        bgcolor: "#EDEDED",
        padding: "70px",
        maxWidth: "100% !important",
        width: "100%",
        marginTop: "130px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#000000",
          fontSize: { lg: "42px", xs: "22px", sm: "40px" },
          fontWeight: "700",
          fontFamily: "Bold",
          lineHeight: { lg: "60px", xs: "40px", sm: "50px" },
          letterSpaceing: "5%",
          textAlign: "center",
        }}
      >
        Clients Testimonials
      </Typography>
      <Box sx={{ marginTop: "50px" }}>
        <Grid>
          <Slider {...settings}>
            {Card.map((data) => (
              <Box
                key={data.id}
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItem: "center",
                }}
              >
                <Avatar
                  sx={{
                    width: "150px",
                    height: "150px",
                    justifyContent: "center",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                  alt="Remy Sharp"
                  src={data.img}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { lg: "24px", xs: "18px", sm: "20px" },
                    fontWeight: "700",
                    lineHeight: "34px",
                    fontFamily: "Bold",
                    letterSpaceing: "5%",
                    color: "#000000",
                    marginBottom: "10px",
                  }}
                >
                  {data.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { lg: "20px", xs: "16px", sm: "18px" },
                    fontWeight: "400",
                    fontFamily: "Regular",
                    lineHeight: "28px",
                    letterSpaceing: "5%",
                    color: "#F05F77",
                    marginBottom: "20px",
                  }}
                >
                  {data.city}
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { lg: "18px", xs: "14px", sm: "16px" },
                    fontWeight: "400",
                    fontFamily: "Regular",
                    lineHeight: "15px",
                    letterSpaceing: "5%",
                    color: "#000000",
                    marginBottom: "20px",
                  }}
                >
                  {data.description.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonial;
