import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchNotes();
  }, [search]);

  const fetchNotes = async () => {
    const response = await axios.get(`/notes?title=${search}`);
    setNotes(response.data);
  };

  const deleteNote = async (id) => {
    await axios.delete(`/notes/${id}`);
    fetchNotes();
  };

  return (
    <div>
      <h2>Notes</h2>
      <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
