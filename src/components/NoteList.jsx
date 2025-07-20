import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ notes, locale }) {
  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          locale={locale}
          {...note}
        />
      ))}
    </section>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  locale: PropTypes.string.isRequired,
};

export default NoteList;
