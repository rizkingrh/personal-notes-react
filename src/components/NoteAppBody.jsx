import React from 'react';
import PropTypes from 'prop-types';
import NoteList from './NoteList';
import NoteInput from './NoteInput';

function NoteAppBody({ notes, keyword, onDelete, onArchive, onAddNote }) {
  // filter by keyword
  const activeNotes = notes.filter(
    (note) =>
      !note.archived && note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const archivedNotes = notes.filter(
    (note) =>
      note.archived && note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="note-app__body">
      <NoteInput onAddNote={onAddNote} />
      <h2>Catatan Aktif</h2>
      {activeNotes.length ? 
        <NoteList
          notes={activeNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        />
        : 
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      }
      <h2>Arsip</h2>
      {archivedNotes.length ? 
        <NoteList
          notes={archivedNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        />
        : 
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      }
    </div>
  );
}

NoteAppBody.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyword: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onAddNote: PropTypes.func.isRequired,
};

export default NoteAppBody;
