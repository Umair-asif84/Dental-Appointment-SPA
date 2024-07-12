import React from "react";
import "./Gallery.css";
import Slider from "react-slick";
import G1 from "../../../src/Asserts/gallery1.png";
import G2 from "../../../src/Asserts/gallery2.png";
import G3 from "../../../src/Asserts/gallery3.png";
import G4 from "../../../src/Asserts/gallery4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, Container, Typography } from "@mui/material";

interface typeGallery {
  id: number;
  image: string;
}

const Gallery = () => {
  const Images: typeGallery[] = [
    {
      id: 1,
      image: G4,
    },
    {
      id: 2,
      image: G3,
    },
    {
      id: 3,
      image: G4,
    },
    {
      id: 4,
      image: G2,
    },
    {
      id: 5,
      image: G4,
    },
    {
      id: 6,
      image: G1,
    },
    {
      id: 7,
      image: G4,
    },
    {
      id: 8,
      image: G3,
    },
    {
      id: 9,
      image: G4,
    },
    {
      id: 10,
      image: G2,
    },
    {
      id: 11,
      image: G4,
    },
    {
      id: 12,
      image: G1,
    },
    {
      id: 13,
      image: G4,
    },
    {
      id: 14,
      image: G3,
    },
    {
      id: 15,
      image: G4,
    },
    {
      id: 16,
      image: G2,
    },
    {
      id: 17,
      image: G4,
    },
    {
      id: 18,
      image: G1,
    },
  ];

  // Set the configuration for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    rows: 2,
    prevArrow: false, // Set to null to hide the previous arrow
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container id="gallery" maxWidth="xl" sx={{ margin: "auto" }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { lg: "42px", xs: "22px", sm: "40px" },
          fontWeight: "700",
          fontFamily: "Bold",
          lineHeight: { lg: "60px", xs: "40px", sm: "40px" },
          letterSpacing: "5%",
          color: "#000000",
          textAlign: "center",
          marginBottom: "30px",
          marginTop: "100px",
        }}
      >
        Our Happy Gallery/Results
      </Typography>
      <Box
        sx={{
          width: "80% !important",
          margin: "0  auto",
          padding: "30px 0px 0px 0px",
        }}
      >
        <Slider {...settings}>
          {Images.map((img) => (
            <Box
              key={img.id}
              className="galleryImage"
              sx={{ padding: "5px", margin: "0px" }}
            >
              <Avatar
                variant="square"
                src={img.image}
                sx={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "30px",

                  "@media (max-width: 960px)": {
                    maxWidth: "80%",
                    maxHeight: "auto",
                  },
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Gallery;
