import React from 'react';
import wheel from './svg/wheel.svg';
import cover from './svg/cover.svg';
import './Header.css'


function HeaderComp() {
    return (
        <div>
            <table>
            <tbody>
                <tr>
                <td className="layered">
                <img src = {wheel} className="wheel" alt="logo"/>
                <img src = {cover} className="cover" alt="logo"/>
                </td>
                <td>
                <h1 style={{textAlign: "center"}}>UFree</h1>
            
                </td>
            </tr>
            
        </tbody>
        </table>
        <p style={{textAlign: "center"}}><strong>Social Status Updating Service</strong></p>
            <hr />
        </div>

    )
}

export default HeaderComp;