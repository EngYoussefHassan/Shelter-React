import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import other components
import Auth from "./components/auth";
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
import { auth } from "./firebase"; // Import the Firebase auth
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
    const [user, setUser] = useState(null);
    const [availableAnimals, setAvailableAnimals] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Router>
            <div className="App">
                <Navbar user={user} /> {/* Pass user state to Navbar */}
                <Routes>
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
                    {user && <Route path="/add-animal" element={<AnimalForm />} />} {/* Only show this route if user is logged in */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
