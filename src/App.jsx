import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePages';
import EventsPage from './components/Pages/EventsPage'; 
import GamePage from './components/Pages/GamePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/CoinersDrift" element={<GamePage />} />
      </Routes>
    </Router>
  );
};

export default App;
