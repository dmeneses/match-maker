import React from 'react';

import { Router } from '@reach/router';

import './App.css';
import CreateCompetition from './competitions/CreateCompetition';
import Competition from './competitions/Competition';

function App() {
  return (
    <Router>
      <CreateCompetition path="/"/>
      <Competition path="/competition/:competitionId"/>
    </Router>
  );
}

export default App;
