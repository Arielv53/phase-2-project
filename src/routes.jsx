import React from 'react';
import './style.css';
import HomePage from './components/Home.jsx';
import AddEventPage from './components/AddEvent.jsx';
import EventDetailPage from './components/EventDetail.jsx';
import NotFoundPage from './components/Error.jsx';
import App from './App.jsx';


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/home",
                element: <HomePage />
            }
    ]},
    {
        path: "/add-event",
        element: <AddEventPage />,
    },
    {
        path: "/event/:id",
        element: <EventDetailPage />,
    }
]

export default routes;