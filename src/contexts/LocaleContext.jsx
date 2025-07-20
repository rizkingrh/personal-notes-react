import React, { createContext, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

const LocaleContext = createContext();

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    const savedLocale = localStorage.getItem('notes-app-locale');
    return savedLocale || 'en';
  });

  useEffect(() => {
    localStorage.setItem('notes-app-locale', locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === 'en' ? 'id' : 'en'));
  };

  const localeContextValue = useMemo(() => ({
    locale,
    toggleLocale
  }), [locale]);

  return (
    <LocaleContext.Provider value={localeContextValue}>
      {children}
    </LocaleContext.Provider>
  );
};

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LocaleContext, LocaleProvider };
