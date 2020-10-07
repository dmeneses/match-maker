import React from 'react';

import { Router } from '@reach/router';

import './App.css';
import CreateEvent from './events/CreateEvent';
import Event from './events/Event';
import Events from './events/Events';

function App() {
  return (
    
    <Router>
      <Events path="events"/>
      <CreateEvent path="/events/create"/>
      <Event path="/events/:eventId"/>
    </Router>
  );
}

export default App;
