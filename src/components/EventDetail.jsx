import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function EventDetailPage () {

  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/eventlist/${id}`)
      .then(response => response.json())
      .then(data => {
        setEvent(data);
        setEventName(data.event);
        setEventDescription(data.description);
      })
      .catch(error => console.error('Error fetching event:', error));
  }, [id]);

  async function handleUpdateEvent(e) {
    e.preventDefault();

    const updatedEvent = {
      event: eventName,
      description: eventDescription,
    };

    try {
      const response = await fetch(`http://localhost:3001/eventlist/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEvent),
      });

      if (response.ok) {
        setEvent(updatedEvent);
        alert('Event updated successfully!');
        navigate('/');
      } else {
        alert('Failed to update event');
      }
    } catch (error) {
      console.error('Error updating event:', error);
      alert('Error updating event');
    }
  };

  

  return (
      <div>
        <Navbar/>
      <h1>Update Event</h1>
      <form onSubmit={handleUpdateEvent}>
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
        <button type="submit">Update</button>
      </form>
    </div>
    );
};
  
export default EventDetailPage;