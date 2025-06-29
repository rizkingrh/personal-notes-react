import React from 'react';

function NoteAppHeader({ onSearch }) {
 return (
   <div className="note-app__header">
     <h1>Notes</h1>
     <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
   </div>
 );
}
 
export default NoteAppHeader;