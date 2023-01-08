import React from "react";
import Video from "../assets/video.mp4";

const Main = ({ audio }) => {
  return (
    <div
      style={{
        display: "flex",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "end",
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "-1",
          overflow: "hidden",
          width: "100%",
          transform: "translateY(-80px)",
        }}
      >
        <video
          style={{ objectFit: "contain", opacity: "0.25" }}
          width="100%"
          height="100%"
          autoPlay
          loop
          muted={!audio}
        >
          <source autoplay src={Video} type="video/mp4" />
          <source autoplay src={Video} type="video/ogg" />
        </video>
      </div>
      <div style={{ bottom: "0" }}>
        <div
          style={{
            height: "30px",
            backgroundColor: "transparent",
            width: "15px",
            borderRadius: "8px",
            border: "2px solid white",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
          className="mouse-circle"
        >
          <div
            style={{
              borderRadius: "50%",
              height: "5px",
              width: "5px",
              backgroundColor: "white",
              marginTop: "3px",
            }}
            className="mouse-scroll"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
