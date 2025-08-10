import { useState, useEffect } from 'react';
import ArrowLeft from '/src/assets/arrow-left.svg?react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function NotePage() {
  const { id } = useParams();
  const noteId = id;

  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  // let note = notes.find(note => note.id === parseInt(noteId));

  return (
    <div className="note">
      <div className="note-header">
        <h3><Link to="/"><ArrowLeft/></Link></h3>
      </div>
      <textarea value = {note?.body}></textarea>
    </div>
  )
}

export default NotePage;
