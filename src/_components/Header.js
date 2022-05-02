import React from 'react';
import lawn from '../img/lawn.png';
import panelLeft from '../img/panelLeft.png';
import panelRight from '../img/panelRight.png';
import panelSky from '../img/panelSky.png';
import '../App.css';
import '../Header.css';

function Header() {
    return (
            <div className = "layered">
            <h1 className = "ProfileTitle">UFree</h1>
            <img className="Lawn" src={lawn} style={{left:'5%'}} alt="Lawn"/>
            <img className="Lawn" src={lawn} style={{left:'20%'}}alt="Lawn"/>
            <img className="Lawn" src={lawn} style={{left:'35%'}}alt="Lawn"/>
            <img className="Lawn" src={lawn} style={{left:'50%'}}alt="Lawn"/>
            <img className="Lawn" src={lawn} style={{left:'65%'}}alt="Lawn"/>
            <img className="Lawn" src={lawn} style={{left:'75%'}}alt="Lawn"/>
            <img className="Houses" src={panelLeft} alt="houses"/>
            <img className="City" src={panelRight} alt="city"/>
            <img className="Sky" src={panelSky} alt="sky"/>
            
            </div>
    );
}

export default Header;