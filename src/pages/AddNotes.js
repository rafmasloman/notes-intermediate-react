import React from 'react';
import Input from '../components/Input';
import useInput from '../utils/customHooks';
import Button from '../components/Button';
import { NotesAPI } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const AddNotes = () => {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  const navigate = useNavigate();
  const addNotes = async (e) => {
    e.preventDefault();
    const notes = await NotesAPI.createNote({ title, body });

    console.log(notes);
    navigate('/');
  };

  return (
    <div className="add-notes-section">
      <form onSubmit={addNotes}>
        <Input
          placeholder="Judul Notes"
          value={title}
          onChange={onTitleChange}
        />
        <textarea
          placeholder="Silahkan Masukkan Catatan..."
          value={body}
          onChange={onBodyChange}
        />
        <div className="btn-wrapper">
          <Button text="Tambah Catatan" />
        </div>
      </form>
    </div>
  );
};

export default AddNotes;
