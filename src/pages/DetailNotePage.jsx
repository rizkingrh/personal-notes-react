import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { DetailPageButton } from '../components/ActionButton';
import { getNote, archiveNote, deleteNote, unarchiveNote } from '../utils/local-data';
import NotFoundPage from './NotFoundPage';

function DetailNotePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);
  const onArchiveHandler = () => {
    archiveNote(id);
    navigate('/');
  };

  const onUnarchiveHandler = () => {
    unarchiveNote(id);
    navigate('/');
  };

  const onDeleteHandler = () => {
    deleteNote(id);
    navigate('/');
  };

  if (!note) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <section className="detail-page">
      <NoteDetail {...note} />
      <DetailPageButton
        note={note}
        onArchive={onArchiveHandler}
        onUnarchive={onUnarchiveHandler}
        onDelete={onDeleteHandler}
      />
    </section>
  );
}

export default DetailNotePage;
