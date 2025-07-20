import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaCheck, FaBoxArchive, FaTrash, FaBoxOpen } from 'react-icons/fa6';
import PropTypes from 'prop-types';

function AddButton({ locale }) {
  return (
    <div className="homepage__action">
      <Link to="/add-note" title={locale === 'en' ? 'Add Note' : 'Tambah Catatan'}>
        <button className="action" type="button">
          <FaPlus />
        </button>
      </Link>
    </div>
  );
}

function SaveButton() {
  return (
    <div className="add-new-page__action">
      <button
        className="action"
        type="submit"
        form="note-form"
        title="Save Note"
      >
        <FaCheck />
      </button>
    </div>
  );
}

function DetailPageButton({ note, onArchive, onUnarchive, onDelete }) {
  return (
    <div className="detail-page__action">
      {note.archived ? (
        <button
          className="action"
          type="button"
          title="Unarchive Note"
          onClick={onUnarchive}
        >
          <FaBoxOpen />
        </button>
      ) : (
        <button
          className="action"
          type="button"
          title="Archive Note"
          onClick={onArchive}
        >
          <FaBoxArchive />
        </button>
      )}
      <button
        className="action"
        type="button"
        title="Delete Note"
        onClick={onDelete}
      >
        <FaTrash />
      </button>
    </div>
  );
}

AddButton.propTypes = {
  locale: PropTypes.string.isRequired,
};

DetailPageButton.propTypes = {
  note: PropTypes.shape({
    archived: PropTypes.bool.isRequired,
  }).isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export {
  AddButton,
  SaveButton,
  DetailPageButton,
};
