//import React, { useState } from "react";
import "./Pricing.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";



function Pricing(){
    const image={
        vid1: "Gradient 2.mp4",
    };
    const img ={
        spot:"record.png",
        spot1:"record (1).png",
        spot2:"record (2).png",
        spot3:"check-mark.png"
    };
    return(
        <div className="allprices">
            <video id="background-video" src={image.vid1} controls loop autoPlay muted />
            <Navbar/>
            <div className="price">
                <h1>Our Pricing Plans</h1>
                <p>Choose the plan that is right for you. Whether you are a small business, a growing enterprise, researcher, engineering student or non-engineering student curious about FEA/CFD analysis, we have a plan that fits your needs and budget. Explore our flexible pricing options and get started today!</p>
            </div>
            <div className="section4">
            <div className="bill">
                <div id='free'>
                    <h3 className="spo">
                        <div id="spot"><img src={img.spot} alt=""/></div>
                        <h3 id="blue">Explorer Plan</h3>
                    </h3>
                    <p id="price">Free<span>/14 Days </span></p>
                    <ul className="pack">
                        <li><p>Explorer plan includes:</p></li>
                        <li><div><img src={img.spot3} alt=""/></div></li>
                        <li><div><img src={img.spot3} alt=""/></div></li>
                        <li><div><img src={img.spot3} alt=""/></div></li>
                        <li><div><img src={img.spot3} alt=""/></div></li>
                    </ul>
                    <Link className="go" to="/Dashboard">Try For Free</Link>
                </div>

                <div id="unique">
                    <p id="popu">Most Popular</p>
                    <h3 className="spo">
                        <div id="spot"><img src={img.spot2} alt=""/></div>
                        <h3 id="orange">Standard Plan</h3>
                    </h3>
                    <p id="price">$9.99<span>/month, billed annually</span></p>
                    <ul className="pack">
                        <li><p>Standard plan includes:</p></li>
                        <li><div><img src={img.spot3} alt=""/></div></li>
                        <li><div><img src={img.spot3} alt=""/></div></li>
                        <li><div><img src={img.spot3} alt=""/></div></li>
                        <li><div><img src={img.spot3} alt=""/></div></li>
                    </ul>
                    <Link className="go1" to="/Authentication">Get Started</Link>
                </div>

                <div id='pro'>
                    <h3 className="spo">
                        <div id="spot"><img src={img.spot1} alt=""/></div>
                        <h3 id="green">Unlimited Plan</h3>
                    </h3>
                    <p id="price">$24.99<span>/month, billed annually</span></p>
                    <ul className="pack">
                        <li><p>Unlimited plan includes:</p></li>
                        <li><div><img src={img.spot3} alt=""/></div></li>
                        <li><div><img src={img.spot3} alt=""/></div></li>
                        <li><div><img src={img.spot3} alt=""/></div></li>
                        <li><div><img src={img.spot3} alt=""/></div></li>
                    </ul>
                    <Link className="go" to="/Authentication">Get Started </Link>
                </div>
            </div>
        </div>


            <Footer/>
        </div>
    )
};

export default Pricing;