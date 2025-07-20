import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import NotesList from '../components/NoteList';
import NoteListEmpty from '../components/NoteListEmpty';
import { AddButton } from '../components/ActionButton';
import { LocaleContext } from '../contexts/LocaleContext';
import { NotesContext } from '../contexts/NotesContext';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const { locale } = React.useContext(LocaleContext);
  const { activeNotes, loading } = React.useContext(NotesContext);

  const changeSearchParams = (keyword) => setSearchParams({ keyword });

  const filteredNotes = keyword
    ? activeNotes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    )
    : activeNotes;

  if (loading) {
    return (
      <section className="homepage">
        <h2>{locale === 'en' ? 'Active Notes' : 'Catatan Aktif'}</h2>
        <p>{locale === 'en' ? 'Loading...' : 'Memuat...'}</p>
      </section>
    );
  }

  return (
    <section className="homepage">
      <h2>{locale === 'en' ? 'Active Notes' : 'Catatan Aktif'}</h2>
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
      <AddButton locale={locale} />
    </section>
  );
}

export default HomePage;
