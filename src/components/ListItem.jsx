
const ListItem = ({note}) => {
  return (
    <>
      <div className="notes-list-item">
        <p>{note.body}</p>
      </div>
    </>
  )
}

export default ListItem
