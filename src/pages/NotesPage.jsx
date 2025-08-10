import notes from "../assets/data";
import ListItem from "../components/ListItem";

const NotesPage = () => {
  return (
    <>
      {notes.map(note => (
        <ListItem key={note.id} note={note} />
      ))}
    </>
  )
}

export default NotesPage;
