import React, { useState } from 'react';
import { RiRestTimeFill, RiRestTimeLine} from "react-icons/ri";
import {RiSmartphoneFill, RiSmartphoneLine } from "react-icons/ri";
import { MdPerson, MdPersonOutline } from "react-icons/md";


function Status () {
    let busy = true;
    let call = false; 
    let free = false;
    const [isBusy, setBusy] = useState(busy);
    const [isCall, setCall] = useState(call);
    const [isFree, setFree] = useState(free)
    const toggleBusy = () => {setBusy(true); setCall(false); setFree(false)};
    const toggleFree = () => {setBusy(false); setCall(true); setFree(false)};
    const toggleCall = () => {setBusy(false); setCall(false); setFree(true)};
    return (
        <>
        {isBusy
        ? <RiRestTimeFill onClick={toggleBusy} />
        : <RiRestTimeLine onClick={toggleBusy} />
        }
        {isCall
        ? <RiSmartphoneFill onClick={toggleCall} />
        : <RiSmartphoneLine onClick={toggleCall} />
        }
        {isFree
        ? <MdPerson onClick={toggleFree} />
        : <MdPersonOutline onClick={toggleFree} />
        }
        </>
    );
    }

export default Status;