import React from 'react';
import Footer from "../Home/Footer";
import Grid from "../../Grid";
import SideBar from "./SideBar";
import Section6 from "../Home/Section6";
import "./Dashboard.css"


function Dashboard(){
    const vid ={
        vid1:"Gradient 2.mp4"
    }
    return(
        <div className="dashboard">
           <video id="background-video"
                  src={vid.vid1} controls loop autoPlay muted>
           </video>
           <Grid/>
           <SideBar/>
           <Section6/>
           <Footer/>
        </div>
    )
}


export default Dashboard;