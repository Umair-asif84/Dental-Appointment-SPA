import React from "react";
import "./News.css";
import News1 from "../../../src/Asserts/news1.png";
import News2 from "../../../src/Asserts/news2.png";
import News3 from "../../../src/Asserts/news3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

interface typeNews {
  id: number;
  img: string;
  description: string;
  date: string | number;
}
const News = () => {
  const NewsData: typeNews[] = [
    {
      id: 1,
      img: News1,
      description:
        "Want Your Malocclusion to be Treated with the Best Aligners Price in Pakistan",
      date: "January 5, 2023",
    },
    {
      id: 2,
      img: News2,
      description:
        "7 Things To Consider While Starting Clear Aligner Treatment",
      date: "December 23, 2022",
    },
    {
      id: 3,
      img: News3,
      description: "WHY DO BRACES TAKE LONGER THAN ALIGNERS",
      date: "December 23, 2022",
    },
    {
      id: 4,
      img: News1,
      description:
        "Want Your Malocclusion to be Treated with the Best Aligners Price in Pakistan",
      date: "January 5, 2023",
    },
    {
      id: 5,
      img: News2,
      description:
        "7 Things To Consider While Starting Clear Aligner Treatment",
      date: "December 23, 2022",
    },
    {
      id: 6,
      img: News3,
      description: "WHY DO BRACES TAKE LONGER THAN ALIGNERS",
      date: "December 23, 2022",
    },
    {
      id: 7,
      img: News1,
      description:
        "Want Your Malocclusion to be Treated with the Best Aligners Price in Pakistan",
      date: "January 5, 2023",
    },
    {
      id: 8,
      img: News2,
      description:
        "7 Things To Consider While Starting Clear Aligner Treatment",
      date: "December 23, 2022",
    },
    {
      id: 9,
      img: News3,
      description: "WHY DO BRACES TAKE LONGER THAN ALIGNERS",
      date: "December 23, 2022",
    },
  ];
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  // Set the configuration for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isTablet ? 2 : 3,
    slidesToScroll: isTablet ? 2 : 3,
    autoplay: true,
    autoplaySpeed: 4000,
    Arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      id="news"
      maxWidth="xl"
      sx={{
        margin: "auto",
        padding: { lg: "30px", sm: "0px" },
        marginTop: "100px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { lg: "42px", xs: "22px", sm: "30px" },
          fontWeight: "700",
          fontFamily: "Bold",
          lineHeight: { lg: "60px", xs: "40px", sm: "50px" },
          letterSpacing: "5%",
          color: "#000000",
          textAlign: "center",
          // Responsive styles
          "@media (max-width: 768px)": {
            fontSize: "32px",
            lineHeight: "48px",
          },
        }}
      >
        Our Latest News/Blogs
      </Typography>
      <Grid
        justifyContent="center"
        sx={{ padding: { lg: "100px", xs: "50px", sm: "100px" } }}
      >
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Slider {...settings}>
            {NewsData.map((data) => (
              <Card
                key={data.id}
                sx={{
                  width: "100%",
                  maxWidth: "100% !important",
                  height: isMobile ? 400 : 500,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  margin: isMobile ? "0 10px" : "0 20px",
                  marginBottom: "50px",
                  // Responsive styles
                  "@media (max-width: 768px)": {
                    height: 450,
                  },
                  "@media (max-width: 480px)": {
                    height: 450,
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={isMobile ? 200 : 300}
                    image={data.img}
                    alt="news image"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{
                        fontSize: { lg: "24px", xs: "18px", sm: "20px" },
                        fontWeight: "600",
                        fontFamily: "SemiBold",
                        lineHeight: "34px",
                        color: "#000000",
                        marginTop: "30px",
                        // Responsive styles
                        "@media (max-width: 768px)": {
                          fontSize: "20px",
                          lineHeight: "30px",
                        },
                      }}
                    >
                      {data.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { lg: "20px", xs: "16px", sm: "18px" },
                        fontWeight: "600",
                        fontFamily: "SemiBold",
                        lineHeight: "28px",
                        color: "#F05F77",
                        marginTop: "10px",
                        // Responsive styles
                        "@media (max-width: 768px)": {
                          fontSize: "16px",
                          lineHeight: "24px",
                        },
                      }}
                    >
                      {data.date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default News;
