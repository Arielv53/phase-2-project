import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from './Navbar';

function HomePage () {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      console.log('Fetching events...');
        fetch('http://localhost:3001/eventlist')
          .then(response => response.json())
          .then(data => setEvents(data))
          .catch(error => console.error('Error fetching events:', error));
    }, []);

    const handleDeleteEvent = async (id) => {
        try {
          const response = await fetch(`http://localhost:3001/eventlist/${id}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            setEvents(events.filter(event => event.id !== id));
            alert('Event deleted successfully!');
          } else {
            alert('Failed to delete event');
          }
        } catch (error) {
          console.error('Error deleting event:', error);
          alert('Error deleting event');
        }
    };

    return (
      <div>
        <Navbar/>
        <h1>List of Events 📅</h1>
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <h2>{event.event}</h2>
              <p>({event.description})</p>
              <button onClick={() => handleDeleteEvent(event.id)}>Delete Event</button>
            </li>
        ))}
      </ul>
      </div>
    );
};
 
export default HomePage;