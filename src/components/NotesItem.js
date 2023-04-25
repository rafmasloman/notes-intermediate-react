import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NotesItem = ({ notes }) => {
  return (
    <div className="notes-item">
      {console.log(notes)}
      {notes.map((note) => (
        <div key={note.id}>
          <Link to={`/notes/${note.id}`} className="note-title-link">
            <h2>{note.title}</h2>
          </Link>
          <p>{note.body}</p>
        </div>
      ))}
    </div>
  );
};

NotesItem.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NotesItem;
