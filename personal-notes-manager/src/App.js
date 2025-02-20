import React from 'react'
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'

const App = () => {
  return (
    <div>
      <h1>Personal Notes Manager</h1>
      <NoteForm />
      <NoteList />
    </div>
  )
}

export default App
