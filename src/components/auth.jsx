import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // State for error messages
    const [message, setMessage] = useState(""); // State for success messages

    const signIn = async () => {
        setError(""); // Reset error message
        setMessage(""); // Reset success message
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage("User created successfully!"); // Success message
        } catch (err) {
            console.error("Error during sign up:", err);
            setError(err.message); // Set error message
        }
    };

    const logIn = async () => {
        setError(""); // Reset error message
        setMessage(""); // Reset success message
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage("Login successful!"); // Success message
        } catch (err) {
            console.error("Error during login:", err);
            setError(err.message); // Set error message
        }
    };

    const logOut = async () => {
        setError(""); // Reset error message
        setMessage(""); // Reset success message
        try {
            await signOut(auth);
            setMessage("User logged out successfully."); // Success message
        } catch (err) {
            console.error("Error during logout:", err);
            setError(err.message); // Set error message
        }
    };

    return (
        <div className="flex flex-col space-y-4 p-4 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-center">Authentication</h2>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded"
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 border border-gray-300 rounded"
            />

            <button
                onClick={logIn} // Changed to logIn for logging in users
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
                Log In
            </button>

            <button
                onClick={signIn} // Changed to signIn for signing up new users
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Sign Up
            </button>

            <button
                onClick={logOut}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
                Log Out
            </button>

            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default Auth;
