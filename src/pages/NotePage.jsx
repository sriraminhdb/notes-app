import { useState, useEffect } from 'react';
import ArrowLeft from '/src/assets/arrow-left.svg?react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function NotePage() {
  const { id: noteId } = useParams();
  let [note, setNote] = useState({body: ''});
  const navigate = useNavigate();

  useEffect(() => {
    if (noteId !== 'new') getNote();
    else setNote({body: ''});
  }, [noteId]);

  let getNote = async () => {
    if(noteId === 'new') return;
    let response = await fetch(`/api/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  // let note = notes.find(note => note.id === parseInt(noteId));

  let updateNote = async () => {
    await fetch(`/api/notes/${noteId}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...note, 'updated': new Date()})  
    });
    navigate('/');
  };

  let deleteNote = async () => {
    await fetch(`/api/notes/${noteId}`, {
      method: 'DELETE'
    });
    navigate('/');
  };

  let createNote = async () => {
    if(note.body){
      await fetch(`/api/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...note, 'created': new Date()})
      });
      navigate('/');
    }
  }

  let handleSubmit = () => {
    if (noteId != 'new' && !note.body) {deleteNote();}
    else if (noteId != 'new') {updateNote();}
    else if (noteId === 'new' && note.body.trim() !== '') {createNote();}
    navigate('/'); // Navigate to home after submit
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3><Link to = "/"><ArrowLeft onClick = {handleSubmit}/></Link></h3>
        {noteId !== 'new' ? (<button onClick = {deleteNote}>Delete</button>) : (<button onClick = {createNote}>Create</button>)}
      </div>
      <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} value = {note?.body}></textarea>

    </div>
  )
}

export default NotePage;
