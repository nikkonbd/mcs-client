import React from "react";
import "./Home.css";
import Banner from "./banner/Banner";
import Banner1 from "./banner1/Banner1";
import Banner2 from "./banner1/Banner2";

const Home = () => {
  return (
    <div className="bg-[#fafbfc]">
      <Banner />
      <Banner1 />
      <Banner2 />
    </div>
  );
};

export default Home;
