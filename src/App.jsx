import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SuccessfulAdop from "./components/SuccessfulAdop";
import About from "./components/About";
import Partners from "./components/Partners";
import Contact from "./components/ContactUs";
import Footer from "./components/Footer";
import Adopt_Foster from "./components/Adopt_Foster";
import Sponsor from "./components/Sponsor";
import Navbar from "./components/Navbar";
import AnimalInfo from "./components/AnimalInfo";
import Payment from "./components/Payment";
import AnimalForm from "./components/AnimalForm";
import HowToAdopt from "./components/HowToAdopt";
import HowToSponsor from "./components/HowToSponsor";
import HowToUpload from "./components/HowToUpload";
import { auth } from "./firebase"; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth"; // Correct import statement

const App = () => {
    const [user, setUser] = useState(null);
    const [availableAnimals, setAvailableAnimals] = useState([]);

    // Firebase authentication state listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Router>
            <div className="App">
                <Navbar user={user} />
                <Routes>
                    {/* Main Routes */}
                    <Route path="/" element={<Hero />} />
                    <Route path="/adopt-foster" element={<Adopt_Foster animalList={availableAnimals} user={user} />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/successful-adoption" element={<SuccessfulAdop />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/sponsor" element={<Sponsor />} />
                    <Route path="/animal/:id" element={<AnimalInfo />} />
                    <Route path="/payment/:id" element={<Payment />} />

                    {/* How To Routes */}
                    <Route path="/how-to/adopt" element={<HowToAdopt />} />
                    <Route path="/how-to/upload" element={<HowToUpload />} />
                    <Route path="/how-to/sponsor" element={<HowToSponsor />} />

                    {/* Protected Route for Add Animal */}
                    {user && <Route path="/add-animal" element={<AnimalForm />} />}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
