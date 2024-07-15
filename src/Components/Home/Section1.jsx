import React from 'react';
import "./Section1.css"
import {Link} from "react-router-dom";

function Salescopy() {
    const softwareimg = {
        img1:"Ansys.png",
        img2:"Abaqus.png",
        img3:"Cosmol.png",
        img4:"Solidworks.png",
        img5:"Autodesk Fusion 360.png",
        img6:"OpenFoam.png",
        vid:"Random.mp4"
    }
    return(
        <div className='section1'>
            <div className="heading">
                <h1>Access Fast Clarity & Accuracy
                    Before and After Your FEA/CFD Analysis in Two Steps
                </h1>
                <p>
                   An AI-Powered platform providing the clarity you need before and after your FEA/CFD analysis projects.
                    Even without direct access to a CAE expert, gain confidence from material selection to results interpretation,
                    and receive high-quality insights into<br/> your analysis outcomes.
                </p>
            </div>
            <ul className="call">
                <li><Link id="call2" to="/FreeAuth">Try For Free</Link></li>
                <li><Link id="call1" to="/Pricing">Access Clarity Now</Link></li>
            </ul>
            <div className="software">
                <p>Trusted to Assist and Interpret Videos, Images and Data from</p>
                <div className="complogo">
                    <div id="complog"><img src={softwareimg.img1} alt="Ansys"/></div>
                    <div id="complog"><img src={softwareimg.img2} alt="Abaqus"/></div>
                    <div id="complog"><img src={softwareimg.img3} alt="Comsol"/></div>
                    <div id="complog"><img src={softwareimg.img4} alt="Solidworks"/></div>
                    <div id="complog"><img src={softwareimg.img5} alt="Fusion 360"/></div>
                    <div id="complog"><img src={softwareimg.img6} alt="OpenFoam"/></div>
                </div>
            </div>
            <div className="video">
                <video src={softwareimg.vid}  alt="MeanAs Video Description" controls loop={softwareimg.vid} autoPlay={softwareimg.vid} muted={softwareimg.vid}></video>
            </div>
        </div>
    )

}

export default Salescopy;