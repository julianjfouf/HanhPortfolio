import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        padding: "100px",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ textAlign: "center" }}>
        All footage and assets used are personally owned. <br />
        &copy; All rights reserved | Website Created by Julian Jfouf
      </p>
    </div>
  );
};

export default Footer;
