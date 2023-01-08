import React, { useState } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Home = () => {
  const [audio, setAudio] = useState(false);
  return (
    <div>
      <Navbar audio={audio} setAudio={setAudio} />
      <Main audio={audio} />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
