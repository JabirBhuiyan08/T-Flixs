import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "./HeroSection";
import PriceSection from "./NetflixPriceSection";

const Home = () => {
  return (
    <div>
      <div className="md:px-10 px-5 pt-20 ">
        <HeroSection></HeroSection>
        <PriceSection></PriceSection>
    </div>
    </div>
  );
};

export default Home;
