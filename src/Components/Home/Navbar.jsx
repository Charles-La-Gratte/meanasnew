import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; 
import "./Navbar.css"


function Navbar() {
    const image ={
        MeanAsLogo : "NobgLogo.png"
    };

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleDropdownClick = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    return (
        <div className="nav">
            <Link to ="/"  className='logo'>
                <img src={image.MeanAsLogo} alt="MeanAsLogo"/>
            </Link>
           <ul className="menu">
               <li><Link id="l1" to="/About">About</Link></li>
               <li><Link id="l1" to="">Features</Link></li>
               <li><Link to="/FreeAuth" id="l1">Dashboard</Link></li>
           </ul>
            <ul className="try">
                 <li><Link id="try" to="/FreeAuth">Try For Free</Link></li>
            </ul>
            <ul className='dropdown'>
                <li>
                    <div className='dropbar' onClick={handleDropdownClick}>
                        <FaBars size={30} /> {/* Use the icon here */}
                    </div>
                </li>
                {isDropdownVisible && (
                    <ul className='dropdown-list'>
                        <li><Link id="l1" to="/About">About</Link></li>
                        <li><Link id="l1" to="">Features</Link></li>
                        <li><Link to="/FreeAuth" id="l1">Dashboard</Link></li>
                        <li><Link id="try" to="/FreeAuth">Try For Free</Link></li>
                    </ul>
                )}
            </ul>
        </div>
        )
}

export default Navbar;

