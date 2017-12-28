import React from 'react';
import {Link } from 'react-router-dom';
import './styles/Navbar.css'
function NavBar() {
  return (
    <div className="Navbar">
        <ul className="Navbar-container">
          <Link to ="/people"><li>People</li></Link>
          <Link to ='/'><li><img alt="Star Wars logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"/></li></Link>
          <Link to ="/planets"><li>Planets</li></Link>
        </ul>
    </div>
  );
}

export default NavBar;
