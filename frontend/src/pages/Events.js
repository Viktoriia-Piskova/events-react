import React from 'react';
import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
    {id: 'e1', title: "The first event"},
    {id: 'e2', title: "Second event"}
]

const Events = () => {
    return (
        <div>
            <h1>Events</h1>
            <ul>
                {DUMMY_EVENTS.map((e) => <li key={e.id}><Link to={e.id}>{e.title}</Link></li>)}
            </ul>
        </div>
    );
};

export default Events;