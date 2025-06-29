import React, { useState } from "react";

function NoteInput({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const maxChar = 50;

  const onTitleChange = (e) => {
    if (e.target.value.length <= maxChar) {
      setTitle(e.target.value);
    }
  };

  const onBodyChange = (e) => {
    setBody(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Send data to parent
    onAddNote({
      title,
      body,
    });

    // Reset input
    setTitle("");
    setBody("");
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={onSubmit}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {maxChar - title.length}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul ..."
          required
          value={title}
          onChange={onTitleChange}
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
          required
          value={body}
          onChange={onBodyChange}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}

export default NoteInput;
