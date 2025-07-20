import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NoteList';
import NoteListEmpty from '../components/NoteListEmpty';
import { LocaleContext } from '../contexts/LocaleContext';
import { NotesContext } from '../contexts/NotesContext';

function ArchivePage() {
  const { locale } = React.useContext(LocaleContext);
  const { archivedNotes, loading } = React.useContext(NotesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const changeSearchParams = (keyword) => setSearchParams({ keyword });

  const filteredNotes = keyword
    ? archivedNotes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    )
    : archivedNotes;

  if (loading) {
    return (
      <section className="archives-page">
        <h2>{locale === 'en' ? 'Archived Notes' : 'Catatan yang Diarsipkan'}</h2>
        <p>{locale === 'en' ? 'Loading...' : 'Memuat...'}</p>
      </section>
    );
  }

  return (
    <section className="archives-page">
      <h2>{locale === 'en' ? 'Archived Notes' : 'Catatan yang Diarsipkan'}</h2>
      <SearchBar
        keyword={keyword}
        keywordChange={changeSearchParams}
        locale={locale}
      />
      {filteredNotes.length > 0 ? (
        <NotesList notes={filteredNotes} locale={locale} />
      ) : (
        <NoteListEmpty locale={locale} />
      )}
    </section>
  );
}

export default ArchivePage;
