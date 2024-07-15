import React, { useState } from "react";
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Authentication.css";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/Pricing"); // Navigate to pricing page after sign up
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/Pricing"); // Navigate to pricing page after sign in
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    switch (error.code) {
      case "auth/email-already-in-use":
        setError("This email is already in use. Please use a different email.");
        break;
      case "auth/invalid-email":
        setError("Invalid email format. Please enter a valid email address.");
        break;
      case "auth/weak-password":
        setError("Weak password. Password should be at least 6 characters long.");
        break;
      case "auth/user-not-found":
        setError("No user found with this email. Please sign up first.");
        break;
      case "auth/wrong-password":
        setError("Incorrect password. Please try again.");
        break;
      default:
        setError("An unexpected error occurred. Please try again later.");
    }
  };

  const image = {
    MeanAsLogo: "NobgLogo.png",
    vid1: "Gradient 2.mp4",
  };

  return (
    <div className="auth">
      <video id="background-video" src={image.vid1} controls loop autoPlay muted />
      <Link className="meanaslogo" to="/">
        <img src={image.MeanAsLogo} alt="MeanAs Logo" />
      </Link>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleAuth} className="forms">
        <label className="labs">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          required
        />
        <label className="labs">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="#MeanAs.ai"
          required
        />
        <button type="submit">{isSignUp ? "Signup with Email" : "Signin with Email"}</button>
      </form>
      <p id="or">OR</p>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Signin with Email" : "Signup with Email"}
      </button>
    </div>
  );
};

export default Authentication;
