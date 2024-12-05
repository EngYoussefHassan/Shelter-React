import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SuccessfulAdop from "./components/SuccessfulAdop";
import About from "./components/About";
import Partners from "./components/Partners";
import Contact from "./components/ContactUs";
import Footer from "./components/Footer";
import Adopt_Foster from "./components/Adopt_Foster";
import Sponsor from "./components/Sponser";
import Navbar from "./components/Navbar";
import AnimalInfo from "./components/Animalinfo";
import Payment from "./components/Payment"; // Import the Payment component
import WebFont from "webfontloader";

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
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/adopt-foster" element={<Adopt_Foster />} />
        <Route path="/services" element={<Services />} />
        <Route path="/successful-adoption" element={<SuccessfulAdop />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/animal/:id" element={<AnimalInfo />} />
        <Route path="/payment/:id" element={<Payment />} /> {/* New route for payment */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
