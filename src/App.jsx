import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SuccessfulAdoption from "./components/SuccessfulAdoption";
import About from "./components/About";
import Partners from "./components/Partners";
import Contact from "./components/ContactUs";

import WebFont from "webfontloader";
import Navbar from "./components/Navbar";

WebFont.load({
  google: {
    families: [
      "Patua One",
      "Sour Gummy",
      "Barlow Semi Condensed",
      "Gloria Hallelujah",
    ],
  },
});

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <SuccessfulAdoption />
      <About />
      <Partners />
      <Contact />
    </>
  );
};

export default App;
