import React from "react";
import "./SideBar.css"
import {Link} from "react-router-dom";

function SideBar() {
    const dashimg ={
        not:"notification.png",
        user:"user.png",
        over:"window.png",
        proj:"layers.png",
        team:"group.png",
        assis:"assistant.png",
        pre:"pre-process.png",
        post:"post-process.png",
        error:"error.png",
        upgrad:"clean.png"
    }
    return(
        <div className='fullbar'>
            <div className="flatbar">
                <div id="right">
                    <div className="allicon"><img id="das" src={dashimg.not} alt="#"/></div>
                </div>
                <div id="beside">
                    <div className="allicon"><img id="das" src={dashimg.user} alt="#"/></div>
                </div>
            </div>
            <div className="sidebar">
                <Link className="compilogo" to="/">
                    <img src="NobgLogo.png"/>
                </Link>
                <ul className="dashy">
                    <Link className="dashli" to="/Dashboard"><div className="dash"><img id="das" src={dashimg.over}/></div>Overview</Link>
                    <Link className="dashli"><div className="dash"><img id="das" src={dashimg.proj}/></div>Projects</Link>
                    <Link className="dashli"><div className="dash"><img id="das" src={dashimg.team}/></div>Team Connect</Link>
                    <Link className="dashli"><div className="dash"><img id="das" src={dashimg.assis}/></div>AI Assistant</Link>
                </ul>
                <Link id="upgra">
                    <div>
                        <div className="allicon">
                            <img id="das" src={dashimg.upgrad} alt="#"/>
                        </div>
                        <h3>Upgrade to Unlimited Plan</h3>
                    </div>
                    <p>Access unlimited clarity and accuracy for your analysis.</p>
                </Link>
            </div>
            <div className='topbar'>
                <h1>Welcome to Your <span>MeanAs</span> Dashboard</h1>
                <p>Select where you need more clarity and accuracy for your FEA/CFD Analysis.</p>
            </div>
            <div className="select">
                <div id="box">
                    <Link id="opt" to="/Preprocess">
                        <div className="allbox"><img id="das" src={dashimg.pre}/></div>
                        <p>Clarity & Accuracy For Pre-Processing</p>
                    </Link>
                </div>
                <div id="box" >
                    <Link id="opt" to="/Errorchecker">
                        <div className="allbox"><img id="das" src={dashimg.error}/></div>
                        <p>FEA/CFD Analysis Error Solutions</p>
                    </Link>
                </div>
                <div id="box">
                    <Link id="opt" to="/Postprocess">
                        <div className="allbox"><img id="das" src={dashimg.post}/></div>
                        <p>Clarity & Accuracy For Post-Processing</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideBar;