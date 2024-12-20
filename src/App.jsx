import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Adopt_Foster from "./components/Adopt_Foster";
import SuccessfulAdop from "./components/SuccessfulAdop";
import About from "./components/About";
import Partners from "./components/Partners";
import Contact from "./components/ContactUs";
import Sponsor from "./components/Sponsor";
import AnimalInfo from "./components/AnimalInfo";
import Payment from "./components/Payment";
import HowToAdopt from "./components/HowToAdopt";
import HowToUpload from "./components/HowToUpload";
import HowToSponsor from "./components/HowToSponsor";
import AnimalForm from "./components/AnimalForm";
import VetsApp from "./components/VetsApp";
import VolunteeringForm from "./components/VolunteeringForm";
import Footer from "./components/Footer";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/adopt-foster" element={<Adopt_Foster />} />
          <Route path="/about" element={<About />} />
          <Route path="/volunteeringform" element={<VolunteeringForm />} />
          <Route path="/successful-adoption" element={<SuccessfulAdop />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/animal/:id" element={<AnimalInfo />} />
          <Route path="/payment" element={<Payment />} /> {/* General payment route */}
          <Route path="/payment/:animalId" element={<Payment />} /> {/* Specific animal payment */}
          <Route path="/how-to/adopt" element={<HowToAdopt />} />
          <Route path="/how-to/upload" element={<HowToUpload />} />
          <Route path="/how-to/sponsor" element={<HowToSponsor />} />
          <Route path="/vets" element={<VetsApp />} />
          {user && <Route path="/add-animal" element={<AnimalForm />} />}
          <Route
            path="*"
            element={
              <div className="text-center py-20">
                <h1 className="text-5xl font-bold text-gray-700">404</h1>
                <p className="text-xl text-gray-500 mt-4">Page Not Found</p>
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
