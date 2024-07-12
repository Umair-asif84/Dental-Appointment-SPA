import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import Header from "./Header1/Header";
import FastClear from "./FastClear/FastClear";
import About from "./AboutAlign/About";
import Footer from "./Footer/Footer";
import Consultation from "./BookFreeConsultation/Consultation";
import Gallery from "./OurHappyGallery/Gallery";
import News from "./OurLatestNews/News";
import Testimonial from "./ClientsTestimonials/Testimonial";
import Work from "./HowItWork/Work";

const Home = () => {
  return (
    <div>
      {" "}
      <About />
      <Work />
      <Gallery />
      <Testimonial />
      <News />
      <Consultation />
    </div>
  );
};

export default Home;
