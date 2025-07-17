import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';
import NoteInput from '../components/NoteInput';
import { SaveButton } from '../components/ActionButton';

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(noteData) {
    addNote(noteData);
    navigate('/');
  }

  return (
    <section className="add-new-page">
      <NoteInput onAddNote={onAddNoteHandler} />
      <SaveButton />
    </section>
  );
}

export default AddPage;
