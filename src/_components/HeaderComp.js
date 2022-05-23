import React from 'react';
import wheel from '../svg/wheel.svg';
import cover from '../svg/cover.svg';
import '../Header.css'


function HeaderComp() {
    return (
        <div  >
            <table width={"160%"} >
                <tbody>
                <tr>
                <td className="layered">
                    <img src = {wheel} className="wheel" alt="logo"/>
                    <img src = {cover} className="cover" alt="logo"/>
                </td>
                <td>
                <h1 style={{textAlign: "center"}}>UFree</h1>
                <p style={{textAlign: "center"}}><strong>Social Status Updating Service</strong></p>
        <p className='descriptor'>Passively share your social availability with friends!</p>
        <p className='descriptor'> Be free instead of asking "u free?"</p>
            
                </td>
                <td width={"50%"}>
                 
                </td>
            </tr>
     
        </tbody>
        </table>
        </div>

    )
}

export default HeaderComp;