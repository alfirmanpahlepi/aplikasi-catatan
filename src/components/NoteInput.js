import useNoteInput from "../hooks/useNoteInput";

export default function NoteInput() {
  const { setInput, submit, changeTitle, charLeft, input } = useNoteInput();
  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form onSubmit={(e) => submit(e)}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {charLeft}
        </p>
        <input
          type="text"
          name="title"
          value={input.title}
          onChange={(e) => changeTitle(e)}
          className="note-input__title"
          placeholder="Ini adalah judul ..."
          required
        />
        <textarea
          type="text"
          name="body"
          value={input.body}
          onChange={(e) => setInput({ ...input, body: e.target.value })}
          className="note-input__body"
          placeholder="Tuliskan catatanmu di sini ..."
          required
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}
