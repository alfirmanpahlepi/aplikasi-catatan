import { useState } from "react";
import useNote from "../hooks/useNote";

export default function NoteInput() {
  const { addNote } = useNote();
  const [input, setInput] = useState({ title: "", body: "" });

  const changeinput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const { title, body } = input;
    if (!title || !body) return;
    addNote(input.title, input.body);
  };

  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form onSubmit={(e) => submit(e)}>
        <p className="note-input__title__char-limit">Sisa karakter: 50</p>
        <input
          type="text"
          name="title"
          value={input.title}
          onChange={(e) => changeinput(e)}
          className="note-input__title"
          placeholder="Ini adalah judul ..."
          required
        />
        <textarea
          type="text"
          name="body"
          value={input.body}
          onChange={(e) => changeinput(e)}
          className="note-input__body"
          placeholder="Tuliskan catatanmu di sini ..."
          required
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}
