import React from "react";
import "./Home.css";
import clouds from "../assets/clouds.png";

const Home = () => {
  return (
    <div className="page">
      <div className="short">
        <h1>hi! i'm Roni Wu </h1>
        <h2>
          ✨a software engineer, designer, and artist - passionate about
          crafting meaningful, aesthetic experiences by bridging code and design
        </h2>
        <p>
          currently in my 3B term of computer science @ UWaterloo, {"\n"}
          previously a full-stack developer at{" "}
          <a href="https://appliedmind.ca/">Applied Mind</a>,{" "}
          <a href="https://fr.ford.ca/">Ford</a>
        </p>
      </div>
      <img src={clouds} alt="clouds" />
    </div>
  );
};

export default Home;
