import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { NotesProvider } from './contexts/NotesContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import AddNotePage from './pages/AddNotePage';
import DetailNotePage from './pages/DetailNotePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';

function AppContent() {
  const { theme } = React.useContext(ThemeContext);
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  React.useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };

    fetchUser();
  }, []);

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage loginSuccess={onLoginSuccess} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
      </Routes>
    );
  }

  return (
    <div className="app-container" data-theme={theme}>
      <header>
        <Navigation logout={onLogout} name={authedUser.name} />
      </header>
      <main>
        <NotesProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archives" element={<ArchivePage />} />
            <Route path="/add-note" element={<AddNotePage />} />
            <Route path="/notes/:id" element={<DetailNotePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </NotesProvider>
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
