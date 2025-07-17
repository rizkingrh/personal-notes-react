import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import AddNotePage from './pages/AddNotePage';
import DetailNotePage from './pages/DetailNotePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/add-note" element={<AddNotePage />} />
          <Route path="/notes/:id" element={<DetailNotePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
