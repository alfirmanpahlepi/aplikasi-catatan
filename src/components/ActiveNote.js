import NoteItem from "./NoteItem";

export default function ActiveNote({ data }) {
  return (
    <section id="active-note">
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {data.every((note) => !note.archived) ? (
          data.map(
            (note) => !note.archived && <NoteItem key={note.id} data={note} />
          )
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
    </section>
  );
}
