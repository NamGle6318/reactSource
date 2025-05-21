import React from "react";
import CardLayout from "./CardLayout";

const ParentCardLayout = () => {
  return (
    <div>
      <CardLayout title="">
        <p>Props of Component</p>
      </CardLayout>
      <CardLayout title="Details">
        <ul>
          <li>Feature A</li>
          <li>Feature B</li>
          <li>Feature C</li>
        </ul>
      </CardLayout>
      <CardLayout title="Contact">
        <p>Email : example@example.com</p>
        <p>P.H : 010-1234-5678</p>
      </CardLayout>
    </div>
  );
};

export default ParentCardLayout;
