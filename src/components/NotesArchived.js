import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NotesArchived = ({ notes }) => {
  console.log(notes);
  return (
    <div className="notes-item">
      {Array.isArray(notes) ? (
        notes.map((note) => (
          <div key={note.id}>
            <Link to={`/notes/${note.id}`}>
              <h3>{note.title}</h3>
            </Link>
            <p>{note.body}</p>
          </div>
        ))
      ) : (
        <div>
          {' '}
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

NotesArchived.propTypes = {
  notes: PropTypes.array,
};

export default NotesArchived;
