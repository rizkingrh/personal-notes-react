import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/local-data';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NoteList';
import NoteListEmpty from '../components/NoteListEmpty';
import { AddButton } from '../components/ActionButton';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const changeSearchParams = (keyword) => setSearchParams({ keyword });

  const activeNotes = getActiveNotes();
  const notes = keyword
    ? activeNotes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    )
    : activeNotes;

  return (
    <section className="homepage">
      <h2>Active Notes</h2>
      <SearchBar keyword={keyword} keywordChange={changeSearchParams} />
      {notes.length > 0 ? <NotesList notes={notes} /> : <NoteListEmpty />}
      <AddButton />
    </section>
  );
}

export default HomePage;
