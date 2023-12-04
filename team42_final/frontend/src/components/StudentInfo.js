// src/components/StudentInfo.js

import React from "react";

const StudentInfo = () => {
  // Inline styles as JavaScript objects
  const parentContainerStyle = {
    display: "flex",
    alignItems: "center",
    minHeight: "100vh", // Full viewport height
  };

  const containerStyle = {
    backgroundColor: "#1e1e1e", // Dark mode background color
    color: "#dcdcdc", // Softer gray text color
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    maxWidth: "400px", // Keep it narrower
    margin: "0 auto",
  };

  return (
    <div style={parentContainerStyle}>
      <div style={containerStyle}>
        <p>
          <strong>Course:</strong> SE/ComS319 Construction of User Interfaces,
          Fall 2023
        </p>
        <p>
          <strong>Date:</strong> December 3, 2023
        </p>
        <p>
          <strong>Professor:</strong> Dr. Abraham N. Aldaco Gastelum <br />
          <strong>Email:</strong> aaldaco@iastate.edu
        </p>
        <p>
          <strong>Name:</strong> Jack Krause <br />
          <strong>Email:</strong> jmkrause@iastate.edu
        </p>
        <p>
          <strong>Name:</strong> Jagger Gourley <br />
          <strong>Email:</strong> gourley@iastate.edu
        </p>
      </div>
    </div>
  );
};

export default StudentInfo;
