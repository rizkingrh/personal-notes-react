import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/local-data';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NoteList';
import NoteListEmpty from '../components/NoteListEmpty';

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const changeSearchParams = (keyword) => setSearchParams({ keyword });

  const archiveNotes = getArchivedNotes();
  const notes = keyword
    ? archiveNotes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    )
    : archiveNotes;

  return (
    <section className="archives-page">
      <h2>Archived Notes</h2>
      <SearchBar keyword={keyword} keywordChange={changeSearchParams} />
      {notes.length > 0 ? <NotesList notes={notes} /> : <NoteListEmpty />}
    </section>
  );
}

export default ArchivePage;
