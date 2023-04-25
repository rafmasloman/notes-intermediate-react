import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NotesAPI } from '../utils/api';
import Button from '../components/Button';
import { FiTrash, FiArchive, FiUnlock } from 'react-icons/fi';
import PropTypes, { object } from 'prop-types';

const NotesDetail = ({ note }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(note);
  const onDeleteNoteHandler = async (noteId) => {
    const note = await NotesAPI.deleteNotes(noteId);
    console.log(note);
    navigate('/');
  };

  const onArchiveNoteHandler = async (noteId) => {
    const note = await NotesAPI.archivedNote(noteId);
    console.log(note);
    navigate('/');
  };

  const onUnArchivedNoteHandler = async (noteID) => {
    const note = await NotesAPI.unArchivedNote(noteID);
    console.log(note);
    navigate('/');
  };

  const formatDated = () => {
    const date = new Date(note.createdAt);

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const newDate = date.toLocaleDateString('id-ID', options);
    return newDate;
  };

  return (
    <div className="note-detail-content">
      <div className="note-detail-header">
        <h1 className="note-title">{note.title}</h1>
        <p className="note-date">{formatDated()}</p>
      </div>
      <div className="note-detail-body">
        <p className="note-body">{note.body}</p>
      </div>

      <div>
        <Button
          variant="icon-btn"
          icon={<FiTrash size={30} />}
          onChange={() => onDeleteNoteHandler(id)}
        />
        {note.archived === false ? (
          <Button
            variant="icon-btn"
            icon={<FiArchive size={30} />}
            onChange={() => onArchiveNoteHandler(id)}
          />
        ) : (
          <Button
            variant="icon-btn"
            icon={<FiUnlock size={30} />}
            onChange={() => onUnArchivedNoteHandler(id)}
          />
        )}
      </div>
    </div>
  );
};

NotesDetail.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NotesDetail;
