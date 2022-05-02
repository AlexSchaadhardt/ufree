import React, { useState } from 'react';
import { RiRestTimeFill, RiRestTimeLine} from "react-icons/ri";
import {RiSmartphoneFill, RiSmartphoneLine } from "react-icons/ri";
import { MdPerson, MdPersonOutline } from "react-icons/md";
import '../App.css'


function Status () {
    let busy = true;
    let call = false; 
    let free = false;
    const [isBusy, setBusy] = useState(busy);
    const [isCall, setCall] = useState(call);
    const [isFree, setFree] = useState(free)
    const toggleBusy = () => {setBusy(true); setCall(false); setFree(false)};
    const toggleCall = () => {setBusy(false); setCall(true); setFree(false)};
    const toggleFree = () => {setBusy(false); setCall(false); setFree(true)};
   
    return (
        <>
        {isBusy
        ? <RiRestTimeFill className='status-icon' onClick={toggleBusy} />
        : <RiRestTimeLine className='status-icon' onClick={toggleBusy} />
        }
        {isCall
        ? <RiSmartphoneFill className='status-icon' onClick={toggleCall} />
        : <RiSmartphoneLine className='status-icon' onClick={toggleCall} />
        }
        {isFree
        ? <MdPerson className='status-icon' onClick={toggleFree} />
        : <MdPersonOutline className='status-icon' onClick={toggleFree} />
        }
        </>
    );
    }

export default Status;