import NoteItem from "./NoteItem";

export default function ArchivedNote({ data }) {
  return (
    <section id="archived-note">
      <h2>Arsip</h2>
      <div className="notes-list">
        {data.every((note) => note.archived) ? (
          data.map(
            (note) => note.archived && <NoteItem key={note.id} data={note} />
          )
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
    </section>
  );
}
