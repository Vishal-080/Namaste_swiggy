import React from "react";
import User from "./User";

const About = () => {
  return (
    <div className="about">
      <h1>About us</h1>
      <User userName="Vishal" loc="Indore" num="123456789" />
    </div>
  );
};

export default About;
