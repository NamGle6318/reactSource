import React from "react";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <ul>
        {["HTML", "CSS", "JAVASCRIPT"].map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
