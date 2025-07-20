import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import AddNotePage from './pages/AddNotePage';
import DetailNotePage from './pages/DetailNotePage';
import NotFoundPage from './pages/NotFoundPage';

function AppContent() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="app-container" data-theme={theme}>
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

function App() {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default App;
