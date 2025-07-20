import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordChange, locale }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder={locale === 'en' ? 'Search by title ...' : 'Cari berdasarkan judul ...'}
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)} />
    </section>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};

export default SearchBar;
