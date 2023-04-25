import React, { useEffect, useState } from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { NotesAPI } from '../utils/api';
import NotesItem from '../components/NotesItem';
const Home = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllNotes = async () => {
      setLoading(true);
      const notes = await NotesAPI.getAllNotes();
      setNotes(notes.data);

      setLoading(false);
    };

    getAllNotes();
  }, []);

  return (
    <div className="home-section">
      <h1>My Notes</h1>
      {loading && <div>Loading...</div>}

      <NotesItem notes={notes} />
      <div className="add-btn">
        <Link to="/addNotes">
          <FiPlusSquare className="icon-btn" size={70} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
