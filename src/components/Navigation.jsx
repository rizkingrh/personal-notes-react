import React from 'react';
import { Link } from 'react-router-dom';
import { LocaleContext } from '../contexts/LocaleContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { BsTranslate, BsSun, BsMoon } from 'react-icons/bs';

function Navigation() {
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <>
      <h1><Link to="/">{locale === 'en' ? 'Notes App' : 'Aplikasi Catatan'}</Link></h1>
      <nav className="navigation">
        <ul>
          <li><Link to="/archives">{locale === 'en' ? 'Archives' : 'Arsip'}</Link></li>
        </ul>
        <div className="navigation-toggles">
          <button
            onClick={toggleLocale}
            className="toggle-button"
            title={`Switch to ${locale === 'en' ? 'Indonesian' : 'English'}`}
          >
            <BsTranslate />
          </button>
          <button
            onClick={toggleTheme}
            className="toggle-button"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <BsMoon /> : <BsSun />}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
