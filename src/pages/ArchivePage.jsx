import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/local-data';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NoteList';
import NoteListEmpty from '../components/NoteListEmpty';
import { LocaleContext } from '../contexts/LocaleContext';

function ArchivePage() {
  const { locale } = React.useContext(LocaleContext);
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
      <h2>{locale === 'en' ? 'Archived Notes' : 'Catatan yang Diarsipkan'}</h2>
      <SearchBar
        keyword={keyword}
        keywordChange={changeSearchParams}
        locale={locale}
      />
      {notes.length > 0 ? (
        <NotesList notes={notes} locale={locale} />
      ) : (
        <NoteListEmpty locale={locale} />
      )}
    </section>
  );
}

export default ArchivePage;
