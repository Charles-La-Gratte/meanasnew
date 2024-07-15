import React from "react";
import "./Defaultbars.css";
import { Link } from "react-router-dom";


function Defaultbars(){
    const dashimg ={
        not:"notification.png",
        user:"user.png",
        over:"window.png",
        proj:"layers.png",
        team:"group.png",
        assis:"assistant.png",
        upgrad:"clean.png"
    }
    return(
        <div classname="defaultbars">
            <div className="flatbars">
                <div id="rights">
                    <div className="allicons"><img id="dass" src={dashimg.not} alt="#"/></div>
                </div>
                <div id="besides">
                    <div className="allicons"><img id="dass" src={dashimg.user} alt="#"/></div>
                </div>
            </div>
            <div className="sidebars">
                <Link className="compilogos" to="/">
                    <img src="NobgLogo.png"/>
                </Link>
                <ul className="dashys">
                    <Link className="dashlis" to="/Dashboard"><div className="dashs"><img id="dass" src={dashimg.over}/></div>Overview</Link>
                    <Link className="dashlis"><div className="dashs"><img id="dass" src={dashimg.proj}/></div>Projects</Link>
                    <Link className="dashlis"><div className="dashs"><img id="dass" src={dashimg.team}/></div>Team Connect</Link>
                    <Link className="dashlis"><div className="dashs"><img id="dass" src={dashimg.assis}/></div>AI Assistant</Link>
                </ul>
                <Link id="upgras">
                    <div>
                        <div className="allicons">
                            <img id="dass" src={dashimg.upgrad} alt="#"/>
                        </div>
                        <h3>Upgrade to Unlimited Plan</h3>
                    </div>
                    <p>Access unlimited clarity and accuracy for your analysis.</p>
                </Link>
            </div>
        </div>
    )
}

export default Defaultbars;