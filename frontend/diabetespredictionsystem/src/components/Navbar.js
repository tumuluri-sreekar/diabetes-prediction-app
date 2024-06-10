import React from 'react';
import '../styles/navbar.css'; 
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
      <Link to="/"><li><a href="/" style={{"margin-left":"0em"}}>Home</a></li></Link>
      <Link to="/overview"><li><a href="/">Overview</a></li></Link>
      <Link to="/info"><li><a href="/">Info</a></li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
