import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ fetchNotes }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Others');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/notes', { title, description, category });
    fetchNotes();
    setTitle('');
    setDescription('');
    setCategory('Others');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Work</option>
        <option>Personal</option>
        <option>Others</option>
      </select>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
