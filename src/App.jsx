import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SuccessfulAdoption from "./components/SuccessfulAdoption";
import About from "./components/About";
import Partners from "./components/Partners";
import Contact from "./components/ContactUs";
import Footer from "./components/Footer";
import Payment from "./components/pages/Payment";
import Adopt_Foster from "./components/Adopt_Foster";

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
      <Adopt_Foster />

      {/* <Navbar />
      <Hero />
      <Services />
      <SuccessfulAdoption />
      <About />
      <Partners />
      <Contact />
      <Footer /> */}
    </>
  );
};

export default App;
