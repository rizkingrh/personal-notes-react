import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';
import { NotesContext } from '../contexts/NotesContext';
import NoteInput from '../components/NoteInput';
import { SaveButton } from '../components/ActionButton';

function AddPage() {
  const navigate = useNavigate();
  const { refreshActiveNotes } = React.useContext(NotesContext);
  const [isLoading, setIsLoading] = React.useState(false);

  async function onAddNoteHandler(noteData) {
    setIsLoading(true);
    const { error } = await addNote(noteData);
    
    if (!error) {
      await refreshActiveNotes();
      navigate('/');
    }
    setIsLoading(false);
  }

  return (
    <section className="add-new-page">
      <NoteInput onAddNote={onAddNoteHandler} isLoading={isLoading} />
      <SaveButton />
    </section>
  );
}

export default AddPage;
