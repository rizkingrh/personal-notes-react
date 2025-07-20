import React from 'react';
import PropTypes from 'prop-types';
import { AddButton } from './ActionButton';

function NoteListEmpty({ locale }) {
  return (
    <section className="notes-list-empty">
      <p className="notes-list__empty">
        {locale === 'en' ? 'No notes recorded' : 'Tidak ada catatan yang tercatat'}
      </p>
    </section>
  );
}

NoteListEmpty.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default NoteListEmpty;
