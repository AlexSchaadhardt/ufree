import React, { useEffect, useState } from 'react';
import '../App.css'
import UserBusy from './UserBusy';


function User({ user}) {
    const calculateTimeLeft = () => {
        if (user.Availability !== 0) {
            console.log(user.Name + user.Availability)
            let hourLeft = user.Hour - parseInt(Date().toString().slice(16, 18));
            if (hourLeft < 0) {
                hourLeft += 24
            }
            let minLeft =  user.Min - parseInt(Date().toString().slice(19, 21));
            if (minLeft < 0 ) {
                minLeft += 60
            }
            if (minLeft < 10) {
                minLeft = "0" + minLeft
            }
            return [hourLeft, minLeft]
    }
        return ["N/A", "N/A"]
    }

    const [hourState, setHourState] = useState(calculateTimeLeft()[0])
    const [minState, setMinState] = useState(calculateTimeLeft()[1])

    useEffect (() => {
        const interval = setInterval(() => {
            setHourState(calculateTimeLeft()[0]);
            setMinState(calculateTimeLeft()[1])
        }, 1000 );
        return () => clearInterval(interval)
    });
    const checkAvailability = () => {
        if (user.Availability !== 0){
            return (
            <p>Time Left: {hourState}: {minState}</p>
            )
        }
        return (
            <p>Not Available</p>
        )
    }
    return (
      <div className="userDisplay">
          <table>
              <tbody >
                  <tr>
                      <td width={"200px"}>
                        <h3>{user.Name}</h3>
                      </td>
                      <td width={"200px"}>
                          <UserBusy Availability={user.Availability}/>
                      </td>
    
                      <td width={"400px"}>
                          {checkAvailability()}
                      </td>
                  </tr>
              </tbody>
          </table>
      
      </div>
    );
}

export default User;