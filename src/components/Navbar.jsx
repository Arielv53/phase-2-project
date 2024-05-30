import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/add-event">Add Event</Link>
        <Link to="/event/:id">Event Details</Link>
      </nav>
    );
};

export default Navbar;