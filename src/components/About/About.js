import React from "react";
import me from "../../images/about/me.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="text-center">This is about Me!</h1>
      <h2 className="text-center">Name: Mahmudul Hasan Zubayer</h2>
      <img src={me} alt="" />
      <h2 className="text-center">
        I am a student of hon's first year. I am in cse department. my goal from
        this course is to get an internship or a job. And my plan B is
        freelancing
      </h2>
    </div>
  );
};

export default About;
