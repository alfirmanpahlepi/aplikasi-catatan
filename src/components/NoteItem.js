import useNote from "../hooks/useNote";
import { showFormattedDate } from "../utils";

export default function NoteItem({ data }) {
  const { deleteNote } = useNote();

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{data.title}</h3>
        <p className="note-item__date">{showFormattedDate(data.createdAt)}</p>
        <p className="note-item__body">{data.body}</p>
      </div>
      <div className="note-item__action">
        <button
          type="button"
          onClick={() => deleteNote(data.id)}
          className="note-item__delete-button"
        >
          Delete
        </button>
        <button className="note-item__archive-button">Arsipkan</button>
      </div>
    </div>
  );
}
