import React from "react";
import "./App.css";
import HeaderTop from "./Components/HeaderTop/HeaderTop";
import Header from "./Components/Header1/Header";
import { Container } from "@mui/material";
import Footer from "./Components/Footer/Footer";
import About from "./Components/AboutAlign/About";
import Gallery from "./Components/OurHappyGallery/Gallery";
import Testimonial from "./Components/ClientsTestimonials/Testimonial";
import News from "./Components/OurLatestNews/News";
import Consultation from "./Components/BookFreeConsultation/Consultation";
import FastClear from "./Components/FastClear/FastClear";
import Work from "./Components/HowItWork/Work";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <HeaderTop />
      <Header />
      <FastClear />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
