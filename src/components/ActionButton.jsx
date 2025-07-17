import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaCheck } from 'react-icons/fa6';
import PropTypes from 'prop-types';

function AddButton() {
  return (
    <div className="homepage__action">
      <Link to="/add-note" title="Add Note">
        <button className="action" type="button">
          <FaPlus />
        </button>
      </Link>
    </div>
  );
}

function SaveButton() {
  return (
    <div className="homepage__action">
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

function ArchiveButton() {
  return (
    <div className="homepage__action">
      <button className="action" type="button" title="Tambah"><FaPlus /></button>
    </div>
  );
}

function DeleteButton() {
  return (
    <div className="homepage__action">
      <button className="action" type="button" title="Tambah"><FaPlus /></button>
    </div>
  );
}

export {
  AddButton,
  SaveButton,
  ArchiveButton,
  DeleteButton,
};
