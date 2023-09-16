import React from "react";
import Header from "../Components/Header";
import FeaturedMovies from "../Components/FeaturedMovies";
import Footer from "../Components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <FeaturedMovies />
      <Footer />
    </div>
  );
};

export default HomeLayout;
