import React from 'react';
import Navbar from "../Home/Navbar.jsx";
import Footer from "../Home/Footer";
import "./About.css";
import { Link } from 'react-router-dom';


function About() {
    const vid ={
        vid1:"Gradient 2.mp4"
    }
    return(
        <div className='about'>
            <video id="background-video"
                  src={vid.vid1} controls loop autoPlay muted>
            </video>
            <Navbar/>
            <div className="about-section">
                <h1>About MeanAs</h1>
                <p>
                    On the 25th of March 2024, as a person who is always interested in assisting my colleagues to complete their analysis on their models. However on that day I created a detailed guidelines analysis video for my friend’s CFD analysis project and sent it to her via email. However, due to storage constraints and the size of the analysis results, I had to delete it from my computer. After a month, the email files had expired, and when she needed the project guidelines with a video again, it was too late. She also wanted me to explain the meaning behind the results derived from the CFD analysis. This experience made me realize the importance of having reliable access to accurate FEA/CFD analysis processes tailored to your specific project at any time, along with clear explanations.
                </p>
                <p>
                    This led to the creation of MeanAs — an AI-powered platform designed to provide clarity and accuracy before and after your FEA/CFD analysis. MeanAs addresses the exact challenges I faced, ensuring that you never lose access to important analysis data and always have a clear understanding of your pre/post-processing analysis.
                </p>
                <p>
                    MeanAs is easy to use for small-scale companies, researchers, university students, and designers who may not have advanced skills in CAE. By leveraging AI, MeanAs offers tailored assistance for your specific projects, from material selection to results interpretation. It provides:
                </p>
                <ul>
                    <li>Clarity & Accuracy for Pre-Processing</li>
                    <li>FEA/CFD Analysis Error Solutions</li>
                    <li>Clarity & Accuracy for Post-Processing</li>
                </ul>
                <p>
                    With MeanAs, you can efficiently test and validate your models and understand the outcomes clearly. Discover how MeanAs can support your projects with the expertise and reliability you need anytime. <Link to="/Pricing">Click here to learn more</Link>.
                </p>
            </div>
            <Footer/>
        </div>
    )
};

export default About;
