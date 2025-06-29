import React, { useState } from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import { getInitialData } from "../utils/index";

function NoteApp() {
  const [keyword, setKeyword] = useState("");
  const [notes, setNotes] = useState(getInitialData);

  const handleSearch = (keyword) => {
    setKeyword(keyword);
  };

  const onDeleteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const onArchiveHandler = (id) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    setNotes(newNotes);
  };

  const onAddNoteHandler = ({ title, body }) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setNotes([newNote, ...notes]);
  };

  return (
    <>
      <NoteAppHeader onSearch={handleSearch} />
      <NoteAppBody
        notes={notes}
        keyword={keyword}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
        onAddNote={onAddNoteHandler}
      />
    </>
  );
}

export default NoteApp;
