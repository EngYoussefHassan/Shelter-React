import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const Auth = ({ authType }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // State for error messages
    const [message, setMessage] = useState(""); // State for success messages

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission
        setError(""); // Reset error message
        setMessage(""); // Reset success message

        if (authType === "signIn") {
            // Sign Up Logic
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                setMessage("User created successfully!"); // Success message
            } catch (err) {
                console.error("Error during sign up:", err);
                setError(err.message); // Set error message
            }
        } else if (authType === "logIn") {
            // Log In Logic
            try {
                await signInWithEmailAndPassword(auth, email, password);
                setMessage("Login successful!"); // Success message
            } catch (err) {
                console.error("Error during login:", err);
                setError(err.message); // Set error message
            }
        }
    };

    return (
        <div className="flex flex-col space-y-4 p-4 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-center">{authType === "signIn" ? "Sign Up" : "Log In"}</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 border border-gray-300 rounded mb-4" // Added mb-4 for bottom margin
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border border-gray-300 rounded mb-4" // Added mb-4 for bottom margin
                    required
                />
                <button
                    type="submit"
                    className={authType === "signIn" ? "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" : "bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"}
                >
                    {authType === "signIn" ? "Sign Up" : "Log In"}
                </button>
            </form>

            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default Auth;
