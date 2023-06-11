import React from "react";
import { Element } from "react-scroll";
import Experience from "../ExperienceBox/Experience";
 import "./ExperienceContainer.css";
const ExperienceContainer = () => {
  return (
    <Element className="experiencecontainer" id="exp">
      <h1>Experience</h1>
      <div className="experiencecontainer__info">
        <Experience number="60" title="clients" />
        <Experience number="40" title="schools" style={{backgroundColor: "#f64c08"}} />
        <Experience number="3month" title="internship" />
        <Experience number="6month" title="experience" />
      </div>
    </Element>
  );
};

export default ExperienceContainer;
