import { useState } from "react";
import useNote from "../hooks/useNote";

export default function NoteInput() {
  const { addNote } = useNote();
  const [input, setInput] = useState({ title: "", body: "" });
  const [charLeft, setCharLeft] = useState(50);

  const changeTitle = (e) => {
    if (charLeft < 1) return;

    const value = e.target.value;
    const key = e.target.name;

    setInput({ ...input, [key]: value });
    setCharLeft(50 - value.length);
  };

  const submit = (e) => {
    e.preventDefault();
    const { title, body } = input;
    if (!title || !body) return;
    addNote(input.title, input.body);
    setInput({ title: "", body: "" });
    setCharLeft(50);
  };

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
