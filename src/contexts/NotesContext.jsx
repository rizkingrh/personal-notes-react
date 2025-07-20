import React from 'react';
import PropTypes from 'prop-types';
import { getActiveNotes, getArchivedNotes } from '../utils/network-data';

const NotesContext = React.createContext();

function NotesProvider({ children }) {
  const [activeNotes, setActiveNotes] = React.useState([]);
  const [archivedNotes, setArchivedNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const refreshActiveNotes = React.useCallback(async () => {
    const { error, data } = await getActiveNotes();
    if (!error) {
      setActiveNotes(data);
    }
  }, []);

  const refreshArchivedNotes = React.useCallback(async () => {
    const { error, data } = await getArchivedNotes();
    if (!error) {
      setArchivedNotes(data);
    }
  }, []);

  const refreshAllNotes = React.useCallback(async () => {
    setLoading(true);
    await Promise.all([refreshActiveNotes(), refreshArchivedNotes()]);
    setLoading(false);
  }, [refreshActiveNotes, refreshArchivedNotes]);

  React.useEffect(() => {
    refreshAllNotes();
  }, [refreshAllNotes]);

  const contextValue = React.useMemo(() => ({
    activeNotes,
    archivedNotes,
    loading,
    refreshActiveNotes,
    refreshArchivedNotes,
    refreshAllNotes,
  }), [activeNotes, archivedNotes, loading, refreshActiveNotes, refreshArchivedNotes, refreshAllNotes]);

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
}

NotesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { NotesContext, NotesProvider };
