import useNote from "../hooks/useNote";

export default function Header() {
  const { search, setSearch } = useNote();
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
}
