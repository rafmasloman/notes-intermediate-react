import React, { useEffect, useState } from 'react';
import { NotesAPI } from '../utils/api';
import { useParams } from 'react-router-dom';
import NotesItem from '../components/NotesItem';
import NotesDetail from '../components/NotesDetail';

const DetailNotes = () => {
  const [note, setNote] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getNote = async () => {
      const noteID = await NotesAPI.getNotesById(id);

      setNote(noteID.data);
    };
    getNote();
  }, []);

  return (
    <div className="note-detail">
      <NotesDetail note={note} />
      {/* {console.log(note)} */}
    </div>
  );
};

export default DetailNotes;
