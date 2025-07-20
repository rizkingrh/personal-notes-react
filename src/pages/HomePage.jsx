import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/local-data';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NoteList';
import NoteListEmpty from '../components/NoteListEmpty';
import { AddButton } from '../components/ActionButton';
import { LocaleContext } from '../contexts/LocaleContext';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const { locale } = React.useContext(LocaleContext);

  const changeSearchParams = (keyword) => setSearchParams({ keyword });

  const activeNotes = getActiveNotes();
  const notes = keyword
    ? activeNotes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    )
    : activeNotes;

  return (
    <section className="homepage">
      <h2>{locale === 'en' ? 'Active Notes' : 'Catatan Aktif'}</h2>
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
      <AddButton locale={locale} />
    </section>
  );
}

export default HomePage;
