import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NoteInput({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onAddNote({ title, body });
  };

  return (
    <form id="note-form" className="add-new-page__input" onSubmit={onSubmitHandler}>
      <input
        className="add-new-page__input__title"
        type="text"
        placeholder="Note title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        name="title"
      />
      <textarea
        className="add-new-page__input__body"
        placeholder="Note body..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        rows={10}
        name="body"
      />
    </form>
  );
}

NoteInput.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default NoteInput;
