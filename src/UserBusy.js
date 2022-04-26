import React, { useState } from 'react';
import { RiRestTimeFill, RiRestTimeLine} from "react-icons/ri";
import {RiSmartphoneFill, RiSmartphoneLine } from "react-icons/ri";
import { MdPerson, MdPersonOutline } from "react-icons/md";



function UserBusy({Availability}) {
  //const currUser = users.userName
  let busy = false;
  let call = false; 
  let free = false;
  const setInitialState = (Availability) => {
    if (Availability === 0) {
      busy = true; call = false; free = false;
    }
    else if (Availability === 1) {
      busy = false; call = true; free = false;
    }
    else {
      busy = false; call = false; free = true;
    }
   }
  setInitialState(Availability)
  const [isBusy, setBusy] = useState(busy);
  const [isCall, setCall] = useState(call);
  const [isFree, setFree] = useState(free)
  const toggleBusy = () => {setBusy(true); setCall(false); setFree(false)};
  const toggleFree = () => {setBusy(false); setCall(true); setFree(false)};
  const toggleCall = () => {setBusy(false); setCall(false); setFree(true)};
  const checkAvailability = (Availability) => {
    //Availability = currUser.Availability
    if (Availability === 0) {
      return toggleBusy
    }
    else if (Availability === 1) {
      return toggleCall
    }
    else {
      return toggleFree
    }
  }

  return (
    <>
      {isBusy
	? <RiRestTimeFill onLoad={checkAvailability} />
	: <RiRestTimeLine onLoad={checkAvailability} />
      }
     {isCall
	? <RiSmartphoneFill onClick={checkAvailability} />
	: <RiSmartphoneLine onClick={checkAvailability} />
      }
      {isFree
	? <MdPerson onClick={checkAvailability} />
	: <MdPersonOutline onClick={checkAvailability} />
      }
    </>
  );
}

export default UserBusy;