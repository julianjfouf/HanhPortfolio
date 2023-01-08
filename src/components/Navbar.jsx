import React from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import "../App.css";

const Navbar = ({ audio, setAudio }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        marginTop: "10px",
        position: "fixed",
        width: "100vw",
        background: "transparent",
        zIndex: "10000000",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          className="nav-logo"
          style={{
            fontFamily: "Allura, cursive",
            fontSize: "72px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          Shnoze
          {/* <img
          className="nav-logoImg"
          src="https://yt3.ggpht.com/W-tMPe3SdjMn8UAjuK0s5I4Xre1yDe3fFEixv31bIvxb0PlKGtxzTE10MHYVJuP6fqfectwKGj8=s176-c-k-c0x00ffffff-no-rj-mo"
          alt=""
        /> */}
        </h1>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "20px",
            fontFamily: "Allura, cursive",
            fontSize: "24px",
            marginBottom: "20px",
          }}
        >
          <li>
            <a className="nav-link" href="">
              Twitter
            </a>
          </li>
          <li>
            <a className="nav-link" href="https://www.youtube.com/@Shnoze">
              Youtube
            </a>
          </li>
          <li>
            <a className="nav-link" href="">
              Email
            </a>
          </li>
        </ul>
        {audio ? (
          <FaVolumeUp
            className="nav-audio"
            onClick={() => setAudio(false)}
            style={{
              textAlign: "center",
              transform: "scale(1.3)",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        ) : (
          <FaVolumeMute
            className="nav-audio"
            onClick={() => setAudio(true)}
            style={{
              textAlign: "center",
              transform: "scale(1.3)",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
