export default function Header() {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari catatan ..." value="" />
      </div>
    </header>
  );
}
