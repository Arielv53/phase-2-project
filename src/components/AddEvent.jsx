import React, { useState } from 'react';
import Navbar from './Navbar';

function AddEventPage () {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  async function handleAddEvent(e) {
    e.preventDefault();

    const newEvent = {
      event: eventName,
      description: eventDescription,
    };

    try {
      const response = await fetch('http://localhost:3001/eventlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        
        setEventName('');
        setEventDescription('');
        alert('Event added successfully!');
      } else {
        alert('Failed to add event');
      }
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Error adding event');
    }
  };
    return (
      <div>
        <Navbar/>
      <h1>Add Event Page</h1>
      <form onSubmit={handleAddEvent}>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};
  
export default AddEventPage;