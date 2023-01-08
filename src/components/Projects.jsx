import React, { useState } from "react";
import "../App.css";
import Project from "./Project";

const Projects = () => {
  const [playing1, setPlaying1] = useState(false);
  const [playing2, setPlaying2] = useState(false);
  const [playing3, setPlaying3] = useState(false);

  return (
    <>
      <div className="bItem"></div>
      <div
        style={{
          textAlign: "center",
          width: "100vw",
          backgroundColor: "black",
          zIndex: "10000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",
          flexDirection: "column",
          padding: "100px",
          position: "relative",
        }}
      >
        <h1
          className="title"
          style={{
            fontFamily: "Allura, cursive",
            color: "white",
            fontSize: "72px",
          }}
        >
          Here are some of my{" "}
        </h1>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Project
            number={"01"}
            title={
              "Title: Shnoze Previews #1 | FREE PROJECT FILES | How to Edit like Shard, Smuti, Spixy, Apie"
            }
            playing={playing1}
            setPlaying={setPlaying1}
            video={
              "https://i.ytimg.com/an_webp/vXNX-Ao8Rm4/mqdefault_6s.webp?du=3000&sqp=CMj-iZ0G&rs=AOn4CLCV1ME3Eb7jvgssurYiY0cFzMV1mQ"
            }
            image={
              "https://i.ytimg.com/vi/vXNX-Ao8Rm4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcf_cZj2eiD6AifpY8b_ySNSyXXw"
            }
            link="https://youtu.be/vXNX-Ao8Rm4"
          />
          <Project
            number={"02"}
            title={
              "Title: Shnoze Previews #2 | FREE PROJECT FILES | How to Edit like Sovioo, Kanji, Xan, Omar"
            }
            playing={playing2}
            setPlaying={setPlaying2}
            video={
              "https://i.ytimg.com/an_webp/zu8d3OZ2I54/mqdefault_6s.webp?du=3000&sqp=COriiZ0G&rs=AOn4CLBidYyM_lBUzQ5n9ttQA3-pHRYo_A"
            }
            image={
              "https://i.ytimg.com/vi/zu8d3OZ2I54/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC26vMNjHMO9O2COiMMIcxcrv7dFg"
            }
            link="https://youtu.be/zu8d3OZ2I54"
          />
          <Project
            number={"03"}
            title={
              "Title: Shnoze Previews #3 | How to Edit like Sovioo, Xan, Apie, Kanji"
            }
            playing={playing3}
            setPlaying={setPlaying3}
            image={
              "https://i.ytimg.com/vi/XkjjQckf_zk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzhNt3NpjmeaX261Uw3hYfto_vNw"
            }
            video={
              "https://i.ytimg.com/an_webp/XkjjQckf_zk/mqdefault_6s.webp?du=3000&sqp=CNPaiZ0G&rs=AOn4CLAsAk2Ym7enrbejTmd3gvPcdYWSGA"
            }
            link="https://youtu.be/XkjjQckf_zk"
          />
        </ul>
      </div>
    </>
  );
};

export default Projects;
