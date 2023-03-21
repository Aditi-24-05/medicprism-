import React, { Component } from 'react';
import { ImProfile } from "react-icons/im";
import logo from "./logo.jpeg"
import './navbar.css';
import {Link } from 'react-router-dom'
function Navbar() {
return (
<div className="navContent">
     <div className='logo1' id="logo">
       <img src={logo} alt="Medicprism"/>
      </div>
        <div className='nav-list' >
          <ul className="list">
            <li className='item'>
              <a href="#">Home</a>
            </li>
            <li className='item'>
              <a href="#">Offers</a>
            </li>
            <li className='item'>
              <a href="#" >Doctor's Desk</a>
            </li>    
            <li className='item'>
              <a href="#" >Information</a>
            </li>
          </ul>
        </div>
    <div className='buttonBox'>
      <ImProfile/>  
      < button type="button" value="Login" class="btn" ><link to='/login'>Login Now</link></button>
    </div>
</div>  
);
}
export default Navbar;
