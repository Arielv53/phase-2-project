import React, { Children } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import HomePage from './components/Home.jsx';
import AddEventPage from './components/AddEvent.jsx';
import EventDetailPage from './components/EventDetail.jsx';
import Navbar from './components/Navbar.jsx';
import NotFoundPage from './components/Error.jsx';

function App() {
  console.log('App component rendered');
    return (
      <>
      <HomePage/>
    </>
    );
};

export default App;
