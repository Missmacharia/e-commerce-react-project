import React from "react";
import cloth4 from "../../Images/WomenImages/cloth4.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="aboutUs">
      <h1>Who are we?</h1>
      <div className="aboutUsImages">
        <img src={cloth4} alt="" />
      </div>
      <div className="aboutUsDetails">
        <p>
          We provide oppoturnities for grow to businesses where the can market
          their products easily and at a very afforable price.
        </p>
        <p>
          We protect the consumer of our goods from extotion by upholding a
          strict contract between <br /> our buyers and seller when the purchase any of
          their products. Therefore protecting both buyers and seller.
        </p>
      </div>
    </div>
  );
};

export default About;
