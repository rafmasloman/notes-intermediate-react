import React, { useEffect, useState } from 'react';
import { NotesAPI } from '../utils/api';
import NotesArchived from '../components/NotesArchived';
const ArchiveNote = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getArchivedNotes = async () => {
      setLoading(true);
      const notes = await NotesAPI.getArchivedNotes();
      setNotes(notes.data);

      setLoading(false);
    };

    getArchivedNotes();
  }, []);

  return (
    <div className="home-section">
      <h1>My Notes</h1>

      <NotesArchived notes={notes.data} loading={loading} />
      {/* <div className="add-btn">
        <Button variant="icon-btn" icon={<FiRewind size={30} />} />
      </div> */}
    </div>
  );
};

export default ArchiveNote;
