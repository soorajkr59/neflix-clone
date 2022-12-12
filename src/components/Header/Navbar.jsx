import React from "react";
import './Navbar.css';
import RiSearchLine from 'react-icons/ri';

export function Navbar()
{
    return(
        <>
        <div className="navbar">
            <img  className="logo1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="no-images" />
            
            <img className="logo2" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="no-images" />
            <img className="Notification" src="https://i.pinimg.com/474x/98/31/a8/9831a87a7f2d3ca32e64a15b1f20cbcf.jpg"/>
            <p className="dvd">DVD</p>
            <p className="kids">KIDS</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl171HS7483rfDchYfORfRqJV1U-I6BrsYNQ&usqp=CAU" className="search"/>
          
        </div>
        </>
    );
}