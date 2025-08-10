import notes from '../assets/data';
import { useParams } from 'react-router-dom';

function NotePage() {
  const { id } = useParams();
  const noteId = id;

  let note = notes.find(note => note.id === parseInt(noteId));

  return (
    <>
      <p>{note?.body}</p>
    </>
  )
}

export default NotePage;
