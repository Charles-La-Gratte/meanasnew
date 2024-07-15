// FeedbackForm.js
import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./Section6.css";

function FeedbackForm() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "feedbacks"), {
        email: email,
        feedback: feedback,
      });
      setMessage("Feedback submitted successfully!");
      setEmail("");
      setFeedback("");
    } catch (error) {
      setMessage("Error submitting feedback: " + error.message);
    }
  };
  const arrow = {
        arr:"arrow.png"
  }
  return (
    <div className="feedback-form-container">
      <h1 className="comment">
        More Feedbacks, More Better <span>MeanAs</span> <br/> For Your Specific FEA/CFD Projects
      </h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="feedback-left">
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="How can we make this product more better for you? Please Comment..."
            required
          />
        </div>
        <div className="left">
            <div><img src={arrow.arr} alt=""/></div>
        </div>
        <div className="feedback-right">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            required
          />
          <button type="submit">Submit Your Feedbacks</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default FeedbackForm;
