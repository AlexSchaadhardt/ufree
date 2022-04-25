import React from 'react';
import lawn from './img/lawn.png';
import panelLeft from './img/panelLeft.png';
import panelRight from './img/panelRight.png';
import panelSky from './img/panelSky.png';
import './App.css';
import './Header.css';

function Header() {
    return (
            <div className = "layered">
            <div className = "ProfileTitle">UFree</div>
            <img className="LawnLeft" src={lawn} alt="lawnleft"/>
            <img className="LawnRight" src={lawn} alt="lawnright"/>
            <img className="LawnCenter" src={lawn} alt="lawnright"/>
            <img className="Houses" src={panelLeft} alt="houses"/>
            <img className="City" src={panelRight} alt="city"/>
            <img className="Sky" src={panelSky} alt="sky"/>
            </div>
    );
}

export default Header;