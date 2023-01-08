import React from "react";
import { FaBalanceScale, FaLink } from "react-icons/fa";

const Project = ({
  number,
  title,
  image,
  link,
  video,
  playing,
  setPlaying,
}) => {
  return (
    <div>
      <li
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          onMouseOver={() => setPlaying(true)}
          onMouseLeave={() => setPlaying(false)}
          className="project"
          style={{ position: "relative", margin: "100px 0px" }}
        >
          <div
            className="project-text"
            style={{
              position: "absolute",
              left: "50%",
              height: "100%",
              transform: "translateX(-50%)",
              zIndex: "10000",
              fontFamily: "Allura, cursive",
              padding: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "60px",
              textAlign: "center"
            }}
          >
            <h1>{number}</h1>
            <h2>{title}</h2>
            <a target="_blank" className="project-link" href={link}>
              <FaLink style={{ transform: "scale(1.5)" }} />
            </a>
          </div>
          <div
            style={{ height: "60vh", overflow: "hidden", borderRadius: "12px" }}
          >
            <img
              className="project-image"
              src={playing ? video : image}
              alt=""
            />
          </div>
        </div>
      </li>
    </div>
  );
};

export default Project;
