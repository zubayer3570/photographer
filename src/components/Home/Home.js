import React from "react";
import Banner from "../Banner/Banner";
import RecentWorks from "../RecentWorks/RecentWorks";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <RecentWorks />
    </div>
  );
};

export default Home;
