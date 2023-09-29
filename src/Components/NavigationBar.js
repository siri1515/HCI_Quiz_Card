import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/about" className="nav-button">About</Link>
    </nav>
  );
}

export default NavigationBar;
