import React from "react";
import Work1 from "../../../src/Asserts/1work.png";
import Work2 from "../../../src/Asserts/2work.png";
import Work3 from "../../../src/Asserts/3work.png";
import Workback from "../../../src/Asserts/workback.png";
import "./Work.css";
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
  useTheme,
} from "@mui/material";

interface typeWork {
  id: number;
  count: string;
  description: string;
  img: string;
}

const Work = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const workData: typeWork[] = [
    {
      id: 1,
      img: Work1,
      count: "01",
      description:
        "Take impressions of your teeth using our home impressions kit or book in for a digital scan.",
    },
    {
      id: 2,
      img: Work2,
      count: "02",
      description:
        "Our dentists will send you a 3D visual of your transformation for approval.",
    },
    {
      id: 1,
      img: Work3,
      count: "01",
      description:
        "Your custom made aligners are shipped to you in less than 2 weeks!",
    },
  ];
  return (
    <Container
      id="work"
      sx={{
        backgroundImage: `url(${Workback})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
        width: { lg: "100%", md: "80%", sm: "80%", xs: "80%" },
        justifyContent: "center",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: isSmallScreen ? "22px" : "42px",
            fontWeight: "700",
            fontFamily: "Bold",
            lineHeight: "60px",
            letterSpacing: "5%",
            marginBottom: "50px",
          }}
        >
          How it works?
        </Typography>
        <Grid
          container
          sx={{
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
          justifyContent="center"
          spacing={isSmallScreen ? 4 : 6}
        >
          {workData.map((data) => (
            <Grid item key={data.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "90%",
                  height: "90%",
                  padding: "20px",
                  maxHeight: "90%",
                  marginTop: "0px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="40%"
                    width="40%"
                    image={data.img}
                    alt="work image"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: { lg: "42px", xs: "24px", sm: "30px" },
                        fontWeight: "700",
                        fontFamily: "Bold",
                        lineHeight: "72px",
                        letterSpaceing: "5%",
                        color: "#F05F77",
                      }}
                    >
                      {data.count}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { lg: "22px", xs: "16px", sm: "18px" },
                        fontWeight: "400",
                        fontFamily: "Regular",
                        lineHeight: "31x",
                        letterSpaceing: "5%",
                        color: "#000000",
                      }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Work;
