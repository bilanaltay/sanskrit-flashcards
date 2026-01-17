import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Introduction from './pages/Introduction';
import Auth from './pages/Auth';
import Decks from './pages/Decks';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';
import Statistics from './pages/Statistics';
import StudySession from './pages/StudySession';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/decks" element={<Decks />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/study/:deckId" element={<StudySession />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;