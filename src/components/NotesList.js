import useNote from "../hooks/useNote";
import NoteItem from "./NoteItem";

export default function NotesList({ title }) {
  const { notes } = useNote();

  const filteredData = () => {
    const isArchived = title === "Arsip";
    const filtered = notes.filter((note) => note.archived === isArchived);
    return filtered;
  };

  return (
    <section id="archived-note">
      <h2>{title}</h2>
      <div className="notes-list">
        {filteredData().length ? (
          filteredData().map((note) => <NoteItem key={note.id} data={note} />)
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
    </section>
  );
}
