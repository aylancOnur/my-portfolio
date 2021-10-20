import React from "react";
import "./skill.css"

const Skill = () => {
  return (
    <section className="skills">
      <header className="skills-header">
        <h2>Kullandığım Bazı Araçlar</h2>
      </header>
      <div className="skills-container">
        <div className="skills-item" aria-label="Javascript">
          <img
            src="./images/icons/javascript-original.svg"
            alt=""
            className="skills-item-img"
            width="64px"
            height="64px"
          />
          Javascript
        </div>
        <div className="skills-item" aria-label="React Js">
          <img
            src="./images/icons/react-original.svg"
            alt=""
            className="skills-item-img"
            width="64px"
            height="64px"
          />
          React JS
        </div>
        <div className="skills-item" aria-label="Node Js">
          <img
            src="./images/icons/nodejs-original.svg"
            alt=""
            className="skills-item-img"
            width="64px"
            height="64px"
          />
          Node JS
        </div>
        <div className="skills-item" aria-label="MongoDB">
          <img
            src="./images/icons/mongodb-original.svg"
            alt=""
            className="skills-item-img"
            width="64px"
            height="64px"
          />
          MongoDB
        </div>
        <div className="skills-item" aria-label="HTML 5">
          <img
            src="./images/icons/html5-original.svg"
            alt=""
            className="skills-item-img"
            width="64px"
            height="64px"
          />
          HTML 5
        </div>
        <div className="skills-item" aria-label="CSS 3">
          <img
            src="./images/icons/css3-original.svg"
            alt=""
            className="skills-item-img"
            width="64px"
            height="64px"
          />
          CSS 3
        </div>
      </div>
    </section>
  );
};

export default Skill;
