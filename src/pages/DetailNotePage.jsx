import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { DetailPageButton } from '../components/ActionButton';
import { getNote, archiveNote, deleteNote, unarchiveNote } from '../utils/network-data';
import { NotesContext } from '../contexts/NotesContext';
import NotFoundPage from './NotFoundPage';

function DetailNotePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { refreshAllNotes } = React.useContext(NotesContext);
  const [note, setNote] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [isProcessing, setIsProcessing] = React.useState(false);

  React.useEffect(() => {
    const fetchNote = async () => {
      setLoading(true);
      const { error, data } = await getNote(id);
      if (!error) {
        setNote(data);
      }
      setLoading(false);
    };

    fetchNote();
  }, [id]);

  const onArchiveHandler = async () => {
    setIsProcessing(true);
    const { error } = await archiveNote(id);
    
    if (!error) {
      await refreshAllNotes();
      navigate('/');
    }
    setIsProcessing(false);
  };

  const onUnarchiveHandler = async () => {
    setIsProcessing(true);
    const { error } = await unarchiveNote(id);
    
    if (!error) {
      await refreshAllNotes();
      navigate('/');
    }
    setIsProcessing(false);
  };

  const onDeleteHandler = async () => {
    setIsProcessing(true);
    const { error } = await deleteNote(id);
    
    if (!error) {
      await refreshAllNotes();
      navigate('/');
    }
    setIsProcessing(false);
  };

  if (loading) {
    return (
      <section className="detail-page">
        <p>Loading...</p>
      </section>
    );
  }

  if (!note) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <section className="detail-page">
      <NoteDetail {...note} />
      <DetailPageButton
        note={note}
        onArchive={onArchiveHandler}
        onUnarchive={onUnarchiveHandler}
        onDelete={onDeleteHandler}
        isProcessing={isProcessing}
      />
    </section>
  );
}

export default DetailNotePage;
